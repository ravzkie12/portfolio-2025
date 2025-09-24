import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    projectUrl?: string;
    githubUrl?: string;
    technologies?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Captura: Monitoring Networks For Malicious Outgoing Traffic",
        description: "A network security monitoring system that detects malicious traffic using threat intelligence and real-time monitoring. It helps administrators quickly respond to threats, quarantine risky connections, and strengthen cybersecurity enforcement through automated reporting.",
        image: "/code.jpg",
        projectUrl: "https://example.com/project1",
        githubUrl: "https://github.com/username/project1",
        technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "MCPI HR & Queue Management System",
        description: "An integrated web application that streamlines HR processes, appointment scheduling, and queuing. It features an appointment system for staff, HR management tools, and a hardware-assisted queue system for the cashier to improve efficiency and service flow.",
        image: "/code.jpg",
        projectUrl: "https://example.com/project2",
        githubUrl: "https://github.com/username/project2",
        technologies: ["React", "Firebase", "Material-UI", "TypeScript"]
    }
];

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/code.jpg`} alt={`Project ${project.title}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white capitalize mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
