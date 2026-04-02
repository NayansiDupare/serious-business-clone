import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

const STRIP_COLORS = ["#1a1a1a", "#f5c842", "#b8a9f0"];

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const lockRef = useRef(false);

  const startTransition = useCallback((path) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setPendingPath(path);
    setIsActive(true);
  }, []);

  const finish = useCallback(() => {
    setIsActive(false);
    setPendingPath(null);
    lockRef.current = false;
  }, []);

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning: isActive }}>
      {children}
      {isActive && (
        <TransitionOverlay pendingPath={pendingPath} onFinish={finish} />
      )}
    </TransitionContext.Provider>
  );
}

function TransitionOverlay({ pendingPath, onFinish }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState("enter"); // enter -> show -> exit -> done

  useEffect(() => {
    const enterDone = setTimeout(() => {
      setPhase("show");
    }, 700);

    const navTimer = setTimeout(() => {
      navigate(pendingPath);
      window.scrollTo(0, 0);
    }, 1400);

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, 1800);

    const doneTimer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearTimeout(enterDone);
      clearTimeout(navTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [navigate, pendingPath, onFinish]);

  const isExiting = phase === "exit";

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none">
      {STRIP_COLORS.map((color, i) => (
        <div
          key={color}
          className="absolute inset-0"
          style={{
            transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
            transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            transitionDelay: `${isExiting ? i * 0.08 : (STRIP_COLORS.length - 1 - i) * 0.08}s`,
            backgroundColor: color,
            zIndex: STRIP_COLORS.length - i,
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-[10]">
        <div
          className="flex flex-col items-center gap-6"
          style={{
            transform: phase === "show" ? "scale(1)" : "scale(0.8)",
            opacity: phase === "show" ? 1 : 0,
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <img
            src="/logonewlong.png"
            alt="Marshall Haber Creative Group"
            className="h-[8vw] md:h-[5vw] w-auto"
          />
          <div className="h-[2px] bg-white/30 w-full" />
          <span
            className="text-white text-[6vw] md:text-[4vw] font-black tracking-tighter uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {getPageName(pendingPath)}
          </span>
        </div>
      </div>
    </div>
  );
}

function getPageName(path) {
  if (!path || path === "/") return "Home";
  // Handle nested paths like /work/motorio
  const segments = path.split("/").filter(Boolean);
  const name = segments[segments.length - 1].replace(/-/g, " ");
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default TransitionProvider;
