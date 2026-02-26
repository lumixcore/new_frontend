import { Marquee } from "@/components/ui/marquee"

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Vue.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Nginx", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Rust", url: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/1200/external-rust-is-a-multi-paradigm-system-programming-language-logo-filled-tal-revivo.jpg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Minecraft", url: "https://cdn.worldvectorlogo.com/logos/minecraft-1.svg" },
  { name: "Discord", url: "https://pngimg.com/d/discord_PNG3.png" },
  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "FastAPI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
]

const firstRow = techLogos.slice(0, techLogos.length / 2)
const secondRow = techLogos.slice(techLogos.length / 2)
const thirdRow = techLogos.slice(0, techLogos.length / 2)
const fourthRow = techLogos.slice(techLogos.length / 2)

const LogoCard = ({
  url,
  name,
}) => {
  return (
    <figure className="relative h-32 w-32 cursor-pointer overflow-hidden rounded-xl p-3">
      <img className="opacity-100 transition-all duration-300" alt={name} src={url}
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/64x64/1a1a2e/ffffff?text=${name.charAt(0)}`;
        }}
      />
    </figure>
  )
}

export function LogoMarquee3D() {
  return (
    <div className="relative isolate flex h-50 w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near left-[50px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee vertical className="[--duration:25s]">
          {firstRow.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
        <Marquee reverse vertical className="[--duration:25s]">
          {secondRow.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
        <Marquee reverse vertical className="[--duration:25s]">
          {thirdRow.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
        <Marquee vertical className="[--duration:25s] hidden sm:block">
          {fourthRow.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50"
        style={{
          height: 100,
          background: 'linear-gradient(to bottom, rgba(0, 3, 19, 1) 0%, rgba(0, 3, 19, 0) 100%)',
          transform: 'translateZ(0)',
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50"
        style={{
          height: 100,
          background: 'linear-gradient(to top, rgba(0, 3, 19, 1) 0%, rgba(0, 3, 19, 0) 100%)',
          transform: 'translateZ(0)',
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-50"
        style={{
          width: 100,
          background: 'linear-gradient(to right, rgba(0, 3, 19, 1) 0%, rgba(0, 3, 19, 0) 100%)',
          transform: 'translateZ(0)',
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-50"
        style={{
          width: 100,
          background: 'linear-gradient(to left, rgba(0, 3, 19, 1) 0%, rgba(0, 3, 19, 0) 100%)',
          transform: 'translateZ(0)',
        }}
      ></div>
    </div>
  )
}
