const estimateReadTimeMinutes = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

export const blogs = [
  {
    slug: 'launch1',
    title: 'Launch of Lumixcore',
    category: 'News',
    publishedAt: '2026-02-25',
    coverImage: '/images/blog1.png',
    content: [
      { type: 'paragraph', text: "You know how hosting can get kinda complicated? Like, you just want to put your project online, but suddenly you're dealing with servers, configs, and a bunch of confusing options. Yeah… we didn’t like that either." },
      { type: 'heading', text: "So what's the deal?", level: 2 },
      { type: 'paragraph', text: "Lumixcore is built to keep things simple. No unnecessary steps, no confusing setup, no extra stuff you don’t need. Just you, your code, and a platform that works without getting in your way." },
      { type: 'callout', text: "⭐ Simple, fast, no hassle." },
      { type: 'heading', text: "What makes us different", level: 2 },
      { type: 'paragraph', text: "We’re not trying to overload you with features. We just focused on what actually matters:" },
      { type: 'list', items: [
        "Cloud containers that just work for your projects",
        "A clean panel that’s easy to use (no headaches)",
        "Affordable pricing (starting from $0.65/month)",
        "Strong hardware so your projects run smoothly",
        "Free plan to get started and test things out"
      ]},
      { type: 'heading', text: "How it works", level: 2 },
      { type: 'paragraph', text: "It’s honestly just three steps:" },
      { type: 'list', items: [
        "Create a container",
        "Upload your code",
        "Click run"
      ]},
      { type: 'paragraph', text: "That’s it. No extra setup." },
      { type: 'heading', text: "The tech stuff (if you're curious)", level: 2 },
      { type: 'paragraph', text: "Free plans run on solid Intel Xeon CPUs. If you upgrade, you get faster 3.1 GHz Gold Cascade Lake processors for better performance." },
      { type: 'paragraph', text: "For the panel, we use our own modified version built on top of Pterodactyl, designed to be simple, clean, and fast to use." },
      { type: 'heading', text: "What’s next?", level: 2 },
      { type: 'paragraph', text: "We’re just getting started. We’re working on improving things, adding useful features, and expanding to more locations." },
      { type: 'paragraph', text: "Right now we’re in the US and Germany, but we’ve got plans to grow a lot more." },
      { type: 'heading', text: "Join us!", level: 2 },
      { type: 'paragraph', text: "Whether you're running a Discord bot, a website, or just trying something new, you can start with a free plan and upgrade whenever you need more." },
      { type: 'paragraph', text: "Ready to get started? visit https://panel.lumixcore.com!" }
    ]
  },
  {
    slug: 'how-to-host-a-discord-bot-for-free',
    title: 'How to host a Discord bot for free',
    category: 'Tutorial',
    publishedAt: '2026-02-25',
    coverImage: '/images/blog2.png',
    content: [
      { type: 'paragraph', text: "Hosting a Discord bot is actually pretty simple. You don’t need a full VPS or anything complicated—just follow a few quick steps and you’re good to go." },

      { type: 'heading', text: "Step 1: Create your bot", level: 2 },

      { type: 'paragraph', text: "If you don’t already have a bot, go to the Discord Developer Portal, create an application, and add a bot to it." },

      { type: 'list', items: [
        "Open your application",
        "Go to the Bot section",
        "Reset token and copy it (you’ll need this later)"
      ]},

      { type: 'heading', text: "Step 2: Create a container", level: 2 },

      { type: 'paragraph', text: "Head over to our panel and create a cloud container. This is where your bot will run." },

      { type: 'heading', text: "Step 3: Upload your code", level: 2 },

      { type: 'paragraph', text: "Go to the \"Files\" tab and upload your bot’s code files." },

      { type: 'heading', text: "Step 4: Configure and run", level: 2 },

      { type: 'list', items: [
        "Go to the Startup tab and set things like versions or start command",
        "Paste your bot token in the environment variables",
        "Open the Console tab",
        "Start your server"
      ]},

      { type: 'paragraph', text: "That’s it. Your bot should now be running." },

      { type: 'heading', text: "Need help?", level: 2 },

      { type: 'paragraph', text: "If you get stuck or have questions, feel free to join our Discord server: https://discord.gg/2h8hBx8A52" }
    ]
  }
].map((post) => {
  const bodyText = post.content.map(item => {
    if (item.type === 'paragraph' || item.type === 'heading' || item.type === 'callout') {
      return item.text;
    } else if (item.type === 'list') {
      return item.items.join(' ');
    }
    return '';
  }).join(' ');
  
  return {
    ...post,
    readTimeMinutes: estimateReadTimeMinutes(bodyText),
  };
});

export const getAllBlogs = () => blogs;

export const getBlogBySlug = (slug) => blogs.find((p) => p.slug === slug);
