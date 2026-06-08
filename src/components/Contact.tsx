import React from "react";
import { useForm } from "react-hook-form";
import { Phone, User, Send, Mail, MapPin } from "lucide-react";

interface ContactFormData {
  name: string;
  phone: string;
  services: {
    [key: string]: boolean;
  };
  customMessage?: string;
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
      services: {
        Catering: false,
        "DJ Sound": false,
        "Cultural Events": false,
        "Shamiyana and Decoration": false,
        "YouTube Live": false,
        Photography: false,
        MakeUp: false,
        "LED Screen": false,
      },
      customMessage: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Get list of selected services
    const selectedServices = Object.entries(data.services)
      .filter(([_, checked]) => checked)
      .map(([serviceName]) => serviceName);

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const servicesStr = selectedServices.join(", ");
    
    // Construct WhatsApp pre-filled message
    let message = `Hi Atithi Events, I'm ${data.name}, ${data.phone}. I'm interested in ${servicesStr}. Please share details.`;
    
    if (data.customMessage) {
      message += ` Message: ${data.customMessage}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919553273970?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const servicesList = [
    "Catering",
    "DJ Sound",
    "Cultural Events",
    "Shamiyana and Decoration",
    "YouTube Live",
    "Photography",
    "MakeUp",
    "LED Screen",
  ];

  return (
    <section id="contact" className="w-full overflow-x-hidden py-16 sm:py-24 bg-transparent relative border-b border-gold/15">
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maroon-dark">
            Plan Events <span className="text-gold-gradient">&amp; Catering</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            Fill out the form below to share your requirements, and we will connect with you
            instantly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-xl border border-gold/15 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-maroon">Contact Information</h3>
              <p className="text-gray-700 text-sm font-sans font-light leading-relaxed">
                Connect with our managers directly to discuss custom menu selections, stage
                decor ideas, and pricing packages.
              </p>

              {/* Managers Details */}
              <div className="space-y-4 pt-4 border-t border-gold/15">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">General Enquiry / WhatsApp</p>
                    <a href="tel:+919553273970" className="text-lg font-serif font-bold text-maroon-dark hover:text-maroon transition-colors">
                      +91 95532 73970
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Karthik Shetty</p>
                    <a href="tel:+919686438759" className="text-lg font-serif font-bold text-maroon-dark hover:text-maroon transition-colors">
                      +91 96864 38759
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Hemaraj Poojary</p>
                    <a href="tel:+918971630052" className="text-lg font-serif font-bold text-maroon-dark hover:text-maroon transition-colors">
                      +91 89716 30052
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Us</p>
                    <a href="mailto:info@atithievents.com" className="text-sm text-gray-700 hover:text-maroon transition-colors">
                      info@atithievents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-sm text-gray-800">
                      Udupi &amp; Kundapura, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - React Hook Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 sm:p-10 rounded-xl border border-gold/20 space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-maroon-dark font-bold mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-maroon/40">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-gold/30 rounded pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-sm"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-maroon-dark font-bold mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-maroon/40">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full bg-white border border-gold/30 rounded pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-sm"
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>
                )}
              </div>

              {/* Services Selection Grid */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-maroon-dark font-bold mb-3">
                  Select Services You Need
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-4 rounded border border-gold/20 shadow-sm">
                  {servicesList.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 cursor-pointer group text-sm text-gray-700 hover:text-maroon-dark font-medium p-2.5 rounded hover:bg-gold/5 transition-colors border border-transparent hover:border-gold/15 min-h-[44px]"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        {...register(`services.${service}`)}
                        className="w-4 h-4 rounded border-gold/40 text-maroon focus:ring-maroon accent-maroon"
                      />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Custom Message (Optional) */}
              <div>
                <label htmlFor="customMessage" className="block text-xs uppercase tracking-widest text-maroon-dark font-bold mb-2">
                  Event Details / Message (Optional)
                </label>
                <textarea
                  id="customMessage"
                  rows={3}
                  {...register("customMessage")}
                  placeholder="Tell us about the event date, guest count, and venue..."
                  className="w-full bg-white border border-gold/30 rounded px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-maroon hover:bg-maroon-dark text-white font-serif font-bold tracking-widest text-sm uppercase py-4 rounded shadow-md shadow-maroon/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Enquiry to WhatsApp</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
