import { useEffect, useRef, useState } from "react";
import { greetings } from "@/data/Greeting";

export const Intro = ({ onFinish }) => {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);
	const timeoutRef = useRef([]);

	const clearAllTimers = () => {
		timeoutRef.current.forEach(clearTimeout);
		timeoutRef.current = [];
	};

	const finishIntro = () => {
		clearAllTimers();
		onFinish?.();
	};

	useEffect(() => {
		clearAllTimers();

		if (index >= greetings.length - 1) {
			const timer = setTimeout(() => {
				setVisible(false);

				const finishTimer = setTimeout(() => {
					onFinish?.();
				}, 500);

				timeoutRef.current.push(finishTimer);
			}, 500);

			timeoutRef.current.push(timer);

			return clearAllTimers;
		}

		const timer = setTimeout(() => {
			setVisible(false);

			const nextTimer = setTimeout(() => {
				setIndex((prev) => prev + 1);
				setVisible(true);
			}, 180);

			timeoutRef.current.push(nextTimer);
		}, 400);

		timeoutRef.current.push(timer);

		return clearAllTimers;
	}, [index, onFinish]);

	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden select-none">
			{/* Ambient background glow */}
			<div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-pulse pointer-events-none" />

			<h1
				className={`relative z-10 text-5xl sm:text-6xl md:text-8xl font-bold text-primary text-glow tracking-tight transition-all duration-300 ease-out ${
					visible
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-90 translate-y-4"
				}`}
			>
				{greetings[index]}
			</h1>

			<div className="absolute bottom-16 flex items-center gap-2 z-10">
				{greetings.map((_, i) => (
					<div
						key={i}
						className={`h-2 rounded-full transition-all duration-300 ${
							i === index
								? "w-8 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]"
								: i < index
								? "w-2 bg-primary/60"
								: "w-2 bg-border"
						}`}
					/>
				))}
			</div>

			<button
				onClick={finishIntro}
				className="absolute top-8 right-8 z-20 rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:text-primary hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
			>
				Skip
			</button>
		</div>
	);
};