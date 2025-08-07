import { AnimatedTestimonialsDemo } from "@/components/modules/AboutAnimatedTestimonials";
import { BackgroundLines } from "@/components/ui/animations/background-lines";

export default function About() {

  return (
    <>
      <BackgroundLines className="relative" svgOptions={{ duration: 3 }}>
        <section className="">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-xl bg-gray-100 shadow-xl dark:bg-gray-900 mt-10">
            <h2 className="text-3xl font-bold indent-8 mb-4">Our Vision</h2>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, distinctio alias voluptas dolores nisi amet molestias quod molestiae. Temporibus voluptas minus ipsum beatae nulla quibusdam facere, numquam sapiente sint consequatur reprehenderit delectus. ...
            </p>
          </div>
        </section>
        <section className="">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-xl bg-gray-100 shadow-xl dark:bg-gray-900 mt-10">
            <h2 className="text-3xl font-bold indent-8 mb-4">Our Mission</h2>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, distinctio alias voluptas dolores nisi amet molestias quod molestiae. Temporibus voluptas minus ipsum beatae nulla quibusdam facere.
            </p>
          </div>
        </section>
      <AnimatedTestimonialsDemo />
      </BackgroundLines>
    </>
  );
}
