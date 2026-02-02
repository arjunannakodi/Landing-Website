export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  publishDate: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Introducing Nexa 2.0: The Future of Connected Work",
    slug: "introducing-nexa-2",
    excerpt: "We are thrilled to announce Nexa 2.0, completely redesigned to help your team write better, think clearly, and stay organized.",
    content: `
      <p>Today, we're excited to share Nexa 2.0 with the world. This isn't just an update; it's a complete reimagining of how teams collaborate and manage knowledge.</p>
      
      <h2>Why Nexa 2.0?</h2>
      <p>Work is becoming more fragmented. Teams are using dozens of tools to manage projects, documents, and communication. We realized that to truly help teams move faster, we needed to bring everything together in a way that feels seamless and intuitive.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Unified Workspace:</strong> Docs, wikis, and projects live side-by-side.</li>
        <li><strong>Real-time Collaboration:</strong> See who is working on what, instantly.</li>
        <li><strong>AI-Powered Insights:</strong> Let Nexa AI summarize meetings and suggest next steps.</li>
      </ul>
      
      <p>We can't wait for you to try it out. This is just the beginning.</p>
    `,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    publishDate: "Oct 12, 2025",
    author: "Sarah Jenkings"
  },
  {
    title: "10 Tips for Better Asynchronous Communication",
    slug: "10-tips-async-communication",
    excerpt: "Master the art of async work with these 10 actionable tips to improve clarity and reduce meetings.",
    content: `
      <p>Asynchronous communication is the superpower of modern remote teams. It allows deep work, reduces meeting fatigue, and respects everyone's time zones. But it requires a shift in how we write and read.</p>
      
      <h2>1. Write for the Reader</h2>
      <p>Always assume the reader doesn't have your context. Explain the "why" before the "what".</p>
      
      <h2>2. Use Visuals</h2>
      <p>A screenshot or a short Loom video is worth a thousand words. Embed them directly in your Nexa docs.</p>
      
      <h2>3. Over-communicate</h2>
      <p>In the absence of body language, tone can be lost. Use emojis and clear language to ensure your message lands correctly.</p>
      
      <p>Adopting these habits takes time, but the payoff in productivity and team happiness is immense.</p>
    `,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    publishDate: "Sep 28, 2025",
    author: "David Chen"
  },
  {
    title: "How We Built Our Design System",
    slug: "building-our-design-system",
    excerpt: "A deep dive into the principles and tools behind Nexa’s new visual identity and UI kit.",
    content: `
      <p>Consistency is key to a great user experience. When we started building Nexa 2.0, we knew we needed a robust design system that could scale with us.</p>
      
      <h2>The Foundation</h2>
      <p>We started with our core values: Clarity, Speed, and Joy. Every component, from a simple button to a complex data grid, had to embody these values.</p>
      
      <h2>Tools of the Trade</h2>
      <p>We used Figma for design and Tailwind CSS for implementation. The utility-first approach of Tailwind allowed us to iterate rapidly while maintaining a coherent visual language.</p>
      
      <p>Check out our open-source UI kit to see how we structure our components.</p>
    `,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    publishDate: "Sep 15, 2025",
    author: "Elena Rodriguez"
  },
  {
    title: "The Ultimate Guide to Project Management in 2026",
    slug: "project-management-guide-2026",
    excerpt: "Learn how top teams are managing complex projects using AI and automated workflows.",
    content: `
      <p>Project management has evolved. It's no longer just about Gantt charts and deadlines; it's about enabling flow. In 2026, the best project managers are facilitators, not just trackers.</p>
      
      <h2>AI Assistant</h2>
      <p>Tools like Nexa AI can now predict bottlenecks before they happen. They can automatically assign tasks based on team capacity and skill sets.</p>
      
      <h2>Wellness First</h2>
      <p>Sustainable pace is better than burnout. Modern tools help track team health and prevent overload.</p>
      
      <p>Stay ahead of the curve by embracing these new methodologies.</p>
    `,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    publishDate: "Aug 22, 2025",
    author: "Michael Ross"
  }
];
