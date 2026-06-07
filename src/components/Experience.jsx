function Experience() {
    const jobs = [
        {
            title: 'Instructional Coach',
            org: 'KIPP San Jose Collegiate',
            dates: 'Aug 2024 - June 2025',
            bullets: ["Managed cross-team projects end-to-end — scope definition, resource alignment, and milestone tracking.", 
                "Onboarded and mentored new staff on tools and shared processes."]
        },
        {
            title: "10th Grade Level Chair",
            org: "KIPP San Jose Collegiate",
            dates: "Aug 2023 – Jun 2025",
            bullets: [
                "Led a 10+ person team; built systems to track student performance data across the grade level.",
                "Managed agendas, action-item tracking, and communication across a multi-team environment."
            ]
        },
        {
            title: "AP Computer Science Principles Teacher",
            org: "KIPP San Jose Collegiate",
            dates: "Aug 2020 – Jun 2025",
            bullets: [
                "Taught algorithmic thinking, data abstraction, and programming fundamentals to 100+ students annually.",
                "Designed project-based assignments following a requirements → design → implementation → testing cycle.",
                "Integrated Desmos and Zoom into lessons to deliver technology-driven instruction during remote learning."
            ]
        }
    ];  
  
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {jobs.map((job) => (
                    <div className="job" key={job.title}>
                        <h3>{job.title} - {job.org}</h3>
                        <span>{job.dates}</span>
                        <ul>
                            {job.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Experience