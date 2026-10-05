export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  type: "client" | "collaborator" | "mentee";
};

export const testimonials: Testimonial[] = [
  {
    name: "Oghen Iger",
    role: "Colleague",
    company: "",
    type: "collaborator",
    text: "Evergreen's attention to detail and care while working is unparalleled. She takes complete ownership of her projects, converting user stories into seamless UIs. She sticks to project deadlines and is diligent with her work. Working with her was a breeze and I would highly recommend her to anyone.",
  },
  {
    name: "Temitayo Kemi Arokewa",
    role: "Full Stack Software Engineer",
    company: "Colour Project v1",
    type: "collaborator",
    text: "I had the pleasure of working with Evergreen on the Colour Project v1 at Brave Redemptive Fellowship. She consistently demonstrated professionalism and a collaborative spirit. She was exceptionally receptive to feedback, always approached challenges with a positive attitude, and communicated with clarity and grace. Evergreen's warm demeanor and commitment to excellence made her an invaluable member of the team.",
  },
  {
    name: "Emeka Nweze",
    role: "Product Designer",
    company: "",
    type: "mentee",
    text: "Growing with Evergreen has been one of the most impactful parts of my journey into UI/UX design. She has a rare gift for breaking down complex concepts into simple, digestible bits that actually stick. Her guidance has helped me grow not just in design skills, but also in how I approach problems and think about users. She's incredibly thoughtful, always generous with her knowledge, and has a calm, clear way of teaching that makes even intimidating topics like design systems feel manageable. I'm so grateful to have had her as a mentor.",
  },
  {
    name: "Mary Osarenren",
    role: "Product Designer",
    company: "",
    type: "mentee",
    text: "Evergreen's expertise in design shone through in her guidance and feedback. She was incredibly knowledgeable and always willing to share her insights. What truly set her apart was her approachable and kind demeanor. She created a supportive learning environment where I felt comfortable asking questions and making mistakes. Evergreen's feedback was invaluable. She was prompt and clear in her communication, always offering constructive criticism that helped me improve my design skills significantly. More importantly, she did it in a way that was encouraging and motivating. Overall, Evergreen was an outstanding mentor who played a key role in my design development. I am incredibly grateful for her guidance and support.",
  },
];