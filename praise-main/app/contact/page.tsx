"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mdkgqvaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Your message has been sent!');
        reset();
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/ocean-background.jpg" alt="Ocean background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16 pt-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-white">
                      First Name
                    </label>
                    <Input id="first-name" {...register('firstName')} className={`bg-white/10 border-white/20 text-white ${errors.firstName ? 'border-red-500' : ''}`} />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-white">
                      Last Name
                    </label>
                    <Input id="last-name" {...register('lastName')} className={`bg-white/10 border-white/20 text-white ${errors.lastName ? 'border-red-500' : ''}`} />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <Input id="email" type="email" {...register('email')} className={`bg-white/10 border-white/20 text-white ${errors.email ? 'border-red-500' : ''}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <Input id="subject" {...register('subject')} className={`bg-white/10 border-white/20 text-white ${errors.subject ? 'border-red-500' : ''}`} />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                  <Textarea id="message" rows={5} {...register('message')} className={`bg-white/10 border-white/20 text-white resize-none ${errors.message ? 'border-red-500' : ''}`} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Our Address</h3>
                    <p className="text-white/80">
                    KN 5 Rd, Plot 12, Remera
                      <br />
                      Gasabo District, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-white/80">(250) 788 717 557</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-white/80"> gigiclaudine@yahoo.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 hover:bg-white/90 transition"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 hover:bg-white/90 transition"
                    >
                      <Instagram className="h-5 w-5 text-blue-600" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">Hours</h3>
                  <p className="text-white/80">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
