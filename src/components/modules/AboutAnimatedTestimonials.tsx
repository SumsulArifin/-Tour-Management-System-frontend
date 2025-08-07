import { AnimatedTestimonials } from "@/components/ui/animations/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "S.Arifin",
      designation: "CEO",
      src: "https://i.postimg.cc/QtDcYTPh/hero.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Sayem Araf ",
      designation: "Operations Director ",
      src: "https://i.postimg.cc/rsm07C9X/syem.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Mishu",
      designation: "Engineering Lead ",
      src: "https://i.postimg.cc/g0WwGPKK/mishu.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Niga Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.postimg.cc/zfFyBPtY/niga.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
