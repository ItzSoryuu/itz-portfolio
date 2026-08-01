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
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
			<h1
				className={`text-6xl md:text-8xl font-bold text-primary transition-all duration-200 ${
					visible
						? "opacity-100 scale-100"
						: "opacity-0 scale-95"
				}`}
			>
				{greetings[index]}
			</h1>

			<div className="absolute bottom-16 flex items-center gap-2">
				{greetings.map((_, i) => (
					<div
						key={i}
						className={`h-2 w-2 rounded-full transition-all duration-300 ${
							i === index
								? "w-6 bg-primary"
								: i < index
								? "bg-primary/70"
								: "bg-border"
						}`}
					/>
				))}
			</div>

			<button
				onClick={finishIntro}
				className="absolute top-8 right-8 rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
			>
				Skip
			</button>
		</div>
	);
};