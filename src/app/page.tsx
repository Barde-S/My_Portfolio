import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const {
    name,
    description,
    avatarUrl,
    initials,
    summary,
    work,
    education,
    skills,
    projects,
    hackathons,
    contact,
  } = DATA;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col space-y-1.5 flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
                yOffset={8}
                text={`Hi, I'm ${name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={name} src={avatarUrl} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Work Experience Section */}
      <section id="work">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {work.map((job, index) => (
            <BlurFade key={job.company} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
              <ResumeCard {...job} period={`${job.start} - ${job.end ?? "Present"}`} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((school, index) => (
            <BlurFade key={school.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
              <ResumeCard {...school} period={`${school.start} - ${school.end}`} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-12 py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                I&apos;ve worked on a variety of projects, from simple websites to complex web
                applications. Here are a few of my favorites.
              </p>
            </div>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, index) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
                <ProjectCard {...project} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons">
        <div className="space-y-12 py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Hackathons
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I like building things
              </h2>
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                During my time in university, I attended{" "}
                {hackathons.length}+ hackathons. It was eye-opening to see the
                possibilities brought to life by motivated individuals.
              </p>
            </div>
          </BlurFade>
          <ul className="divide-y divide-dashed border-l">
            {hackathons.map((hackathon, index) => (
              <BlurFade key={hackathon.title + hackathon.dates} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
                <HackathonCard {...hackathon} />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="text-center px-4 py-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                Want to chat? Send me a DM{" "}
                <Link href={contact.social.X.url} className="text-blue-500 hover:underline">
                  on Twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. Soliciting will be ignored.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
