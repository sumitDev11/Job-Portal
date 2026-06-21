import { FileText, Send, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create An Account",
    description:
      "It's very easy to open an account and start your journey.",
  },
  {
    icon: FileText,
    title: "Complete your profile",
    description: "Share all the key details so employers can get to know you.",
  },
  {
    icon: Send,
    title: "Apply job or hire",
    description:
      "Apply to your preferred jobs or hire top talent effortlessly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-2xl font-bold uppercase  tracking-wide text-blue-600 mb-2">
            Simple Steps
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-8 rounded-xl border-2 border-transparent bg-background text-center space-y-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-500"
            >
              <div className="h-20 w-20 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
                <Icon size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-base font-normal text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
