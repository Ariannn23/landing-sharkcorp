import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  location: z.string().min(3, "La ubicación es requerida"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function Contact() {
  const sectionRef = useRef(null);
  const successRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      infoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 80%" },
      },
    );

    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      },
    );
  }, []);

  useEffect(() => {
    if (isSuccess && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { scale: 0.5, opacity: 0, rotationY: 90 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
      );
    }
  }, [isSuccess]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    // Si el campo es nombre, no permitimos números
    if (name === "name") {
      value = value.replace(/[0-9]/g, "");
    }

    // Si el campo es teléfono, solo permitimos números y +
    if (name === "phone") {
      value = value.replace(/[^0-9+]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
    } else {
      setErrors({});
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-shark-navy text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-shark-navy to-shark-dark"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div ref={infoRef} className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6">Contáctanos</h2>
            <p className="text-blue-200 mb-10 text-lg">
              ¿Tienes un proyecto en mente? Hablemos. Nuestro equipo está listo
              para ayudarte a llevar tus ideas al siguiente nivel.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-gray-300">Trujillo, La Libertad, Perú</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-gray-300">+51 987 654 321</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Correo Electrónico</h4>
                  <p className="text-gray-300">info@sharkcorp.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative"
          >
            {isSuccess ? (
              <div
                ref={successRef}
                className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 z-20"
              >
                <CheckCircle size={64} className="text-[#000047] mb-6" />
                <h3 className="text-3xl font-black text-[#000047] mb-2 text-center">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-500 text-center font-medium">
                  Gracias por contactarnos. Nuestro equipo se pondrá en contacto
                  contigo muy pronto.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      location: "",
                      message: "",
                    });
                  }}
                  className="mt-8 bg-[#000047]/10 text-[#000047] hover:bg-[#000047] hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : null}

            <h3 className="text-2xl font-bold text-shark-navy mb-8">
              Envíanos un mensaje
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border ${errors.name ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#3084ff] transition-all`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-bold mt-1 pl-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border ${errors.email ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#3084ff] transition-all`}
                    placeholder="juan@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-bold mt-1 pl-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#3084ff] transition-all`}
                    placeholder="+51 999 999 999"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs font-bold mt-1 pl-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border ${errors.location ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#3084ff] transition-all`}
                    placeholder="Ciudad, País"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs font-bold mt-1 pl-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border ${errors.message ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-[#3084ff] transition-all`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs font-bold mt-1 pl-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#3084ff]/20 cursor-pointer group overflow-hidden bg-[#000047] text-white font-bold z-10 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="absolute w-[200%] h-[800%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,#3084ff_100%)] animate-[spin_1.5s_linear_infinite] -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute inset-[2px] bg-[#000047] rounded-[10px] -z-10"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Procesando…
                    </span>
                  </>
                ) : (
                  <>
                    <div className="absolute w-[200%] h-[800%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,#3084ff_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_1.5s_linear_infinite] -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute inset-[2px] bg-[#000047] rounded-[10px] -z-10"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Enviar Mensaje{" "}
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
