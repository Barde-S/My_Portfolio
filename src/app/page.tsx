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
    name = "",
    description = "",
    avatarUrl = "",
    initials = "",
    summary = "",
    work = [],
    education = [],
    skills = [],
    projects = [],
    hackathons = [],
    contact = {},
  } = DATA || {};

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
                text={`Hi, I'm ${name.split(" ")[0] || "Guest"} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={description || "Welcome to my portfolio!"}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={name || "Avatar"} src={avatarUrl || "/default-avatar.png"} />
                <AvatarFallback>{initials || "NA"}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {summary || "This section will provide an overview of my background."}
          </Markdown>
        </BlurFade>
      </section>

      {/* Additional sections like Work, Education, Skills, Projects, Hackathons, Contact */}
      {/* ... */}
    </main>
  );
};
