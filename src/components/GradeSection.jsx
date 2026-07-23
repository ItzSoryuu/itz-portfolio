import { grade } from "../data/Grade";
import { useState } from "react";
import { Clock } from "lucide-react";

export const GradeSection = () => {
	const [activeSemester, setActiveSemester] = useState(1);

	const currentSemester = grade.find((s) => s.id === activeSemester);

	const getGradeColor = (grade) => {
		if (grade >= 95) return "text-blue-400";
		if (grade >= 90) return "text-green-400";
		if (grade >= 80) return "text-yellow-400";
		if (grade >= 70) return "text-orange-400";
		return "text-red-400";
	};

	const getGradeBarWidth = (grade) => `${grade}%`;

	const average =
		currentSemester && currentSemester.grades.length > 0
			? (
				currentSemester.grades.reduce((sum, g) => sum + g.grade, 0) /
				currentSemester.grades.length
			).toFixed(2)
			: null;

	return (
		<section id="grade" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				{/* Section Header */}
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					My <span className="text-primary">Grade</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Academic grades from semester 1 to 5 during high school.
				</p>

				{/* Semester Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-10">
					{grade.map((sem) => (
						<button
							key={sem.id}
							onClick={() => setActiveSemester(sem.id)}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSemester === sem.id
									? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.5)]"
									: "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
								}`}
						>
							{sem.label}
						</button>
					))}
				</div>

				{/* Grade Content */}
				<div key={activeSemester} className="animate-fade-in">
					{currentSemester?.placeholder ? (
						/* Semester 5 Placeholder */
						<div className="glass rounded-2xl p-12 text-center border-primary/30">
							<Clock className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
							<h3 className="text-2xl font-bold mb-3">
								<span className="text-primary">Coming Soon</span>
							</h3>
							<p className="text-muted-foreground max-w-md mx-auto">
								Academic grades for semester 5 are not yet available. This
								page will be updated once the results are out.
							</p>
						</div>
					) : (
						/* Grade Table */
						<div className="glass rounded-2xl overflow-hidden border-primary/30">
							{/* Average Header */}
							{average && (
								<div className="px-6 py-4 border-b border-primary/30 flex items-center justify-between">
									<span className="text-sm font-medium text-muted-foreground">
										Average Score
									</span>
									<span className="text-2xl font-bold text-primary">
										{average}
									</span>
								</div>
							)}

							{/* Grades */}
							<div className="divide-y divide-primary/10">
								{currentSemester?.grades.map((item, index) => (
									<div
										key={item.subject}
										className="px-6 py-3 flex items-center gap-4 hover:bg-primary/5 transition-colors"
										style={{ animationDelay: `${index * 50}ms` }}
									>
										{/* Subject */}
										<span className="w-40 sm:w-48 text-sm font-medium shrink-0">
											{item.subject}
										</span>

										{/* Progress Bar */}
										<div className="flex-1 h-2 rounded-full bg-border/50 overflow-hidden">
											<div
												className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-700 ease-out"
												style={{ width: getGradeBarWidth(item.grade) }}
											/>
										</div>

										{/* Grade Number */}
										<span
											className={`w-10 text-right text-sm font-bold ${getGradeColor(
												item.grade
											)}`}
										>
											{item.grade}
										</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
