import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Crown,
  Sparkles,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Scheduling: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [aiAnalysis, setAiAnalysis] = useState("");

  const services = [
    {
      id: "fisio",
      name: "Fisioterapia",
      icon: "🏃‍♂️",
      desc: "Reabilitação e performance",
    },
    {
      id: "pilates",
      name: "Pilates Clínico",
      icon: "🧘‍♀️",
      desc: "Equilíbrio e força core",
    },
    {
      id: "quiro",
      name: "Quiropraxia",
      icon: "🦴",
      desc: "Alinhamento e alívio",
    },
  ];

  const times = [
    "06:00",
    "07:30",
    "09:00",
    "10:30",
    "14:00",
    "15:30",
    "17:00",
    "18:30",
  ];

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const finishBooking = async () => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `O paciente ${formData.name} agendou ${formData.service} para o dia ${formData.date} às ${formData.time}. Gere uma mensagem curta e simpática de confirmação.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      setAiAnalysis(text || "Agendamento confirmado com sucesso!");
      setStep(4);
    } catch (error) {
      console.error(error);
      setAiAnalysis(
        "Agendamento processado! Em breve nossa equipe entrará em contato via WhatsApp para confirmar.",
      );
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendar" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 reveal">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100 transition-all duration-300 hover:shadow-zinc-200">
          <div className="bg-black p-8 text-white flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-serif">Agendamento Online</h2>
              <p className="text-zinc-400 text-sm">Passo {step} de 4</p>
            </div>
            <Crown className="w-8 h-8 opacity-50" />
          </div>

          <div className="p-8 md:p-12">
            {/* Step 1: Service */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-black mb-6">
                  Qual serviço você procura?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setFormData({ ...formData, service: s.name });
                        handleNext();
                      }}
                      className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 ${formData.service === s.name ? "border-black bg-zinc-50" : "border-zinc-100 hover:border-zinc-300 hover:-translate-y-1"}`}
                    >
                      <span className="text-3xl mb-4 block">{s.icon}</span>
                      <p className="font-bold text-black">{s.name}</p>
                      <p className="text-xs text-zinc-500 mt-1">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-black mb-6">
                  Escolha o melhor horário
                </h3>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-zinc-400 uppercase">
                    Data
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl border border-zinc-200 focus:border-black transition-colors outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-zinc-400 uppercase">
                    Horários Disponíveis
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setFormData({ ...formData, time: t })}
                        className={`py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${formData.time === t ? "bg-black text-white border-black scale-105" : "bg-white text-zinc-600 border-zinc-200 hover:border-black active:scale-95"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-zinc-400 font-bold hover:text-black transition-colors"
                  >
                    <ChevronLeft /> Voltar
                  </button>
                  <button
                    disabled={!formData.date || !formData.time}
                    onClick={handleNext}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold disabled:opacity-30 flex items-center gap-2 transition-all hover:bg-zinc-800 active:scale-95"
                  >
                    Próximo <ChevronRight />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Info */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-black mb-6">
                  Seus Dados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Nome Completo"
                    className="p-4 rounded-xl border border-zinc-200 outline-none focus:border-black transition-colors"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    placeholder="E-mail"
                    type="email"
                    className="p-4 rounded-xl border border-zinc-200 outline-none focus:border-black transition-colors"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    placeholder="WhatsApp"
                    className="p-4 rounded-xl border border-zinc-200 outline-none focus:border-black transition-colors"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3 italic text-xs text-zinc-500">
                    <Sparkles className="w-4 h-4 text-zinc-400" />
                    Enviaremos um lembrete inteligente 24h antes.
                  </div>
                </div>
                <textarea
                  placeholder="Conte-nos brevemente o motivo da consulta (opcional)"
                  className="w-full p-4 rounded-xl border border-zinc-200 outline-none focus:border-black h-32 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                ></textarea>
                <div className="flex justify-between pt-8">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-zinc-400 font-bold hover:text-black transition-colors"
                  >
                    <ChevronLeft /> Voltar
                  </button>
                  <button
                    disabled={!formData.name || !formData.phone || loading}
                    onClick={finishBooking}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:bg-zinc-800 active:scale-95"
                  >
                    {loading ? "Processando..." : "Confirmar Agendamento"}
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center py-12 space-y-8 animate-scale-in">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 hover:rotate-12">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif text-black">
                    Tudo pronto, {formData.name.split(" ")[0]}!
                  </h3>
                  <p className="text-zinc-500">
                    Seu agendamento foi pré-confirmado no sistema.
                  </p>
                </div>

                <div className="max-w-md mx-auto p-6 bg-zinc-50 border border-zinc-100 rounded-2xl relative transition-all duration-300 hover:shadow-md">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-black text-[10px] text-white font-bold rounded-full uppercase tracking-tighter flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Assistente King Fisio
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed italic">
                    "{aiAnalysis}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto">
                  <button className="p-3 border border-zinc-200 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Google Calendar
                  </button>
                  <button className="p-3 border border-zinc-200 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" /> Outlook
                  </button>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="text-zinc-400 hover:text-black text-sm font-bold uppercase tracking-widest transition-colors duration-200"
                >
                  Novo Agendamento
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
