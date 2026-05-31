"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { ShieldCheck, BadgeCheck, Award, Hammer, Star, Building } from "lucide-react";

export default function LandscapingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            brandName="Summit Peak Roofing"
            navItems={[
              { name: "Services", id: "services" },
              { name: "Why Us", id: "why-us" },
              { name: "Gallery", id: "team" },
              { name: "Testimonials", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Call Now", href: "tel:5558887777" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            tag="Trusted Roofing Professionals"
            tagIcon={ShieldCheck}
            title="Protecting Homes with Expert Roofing Solutions"
            description="Professional roof repairs, replacements, and inspections backed by quality craftsmanship."
            buttons={[
              { text: "Get a Free Estimate", href: "#contact" },
              { text: "Call Now", href: "tel:5558887777" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/close-up-building-with-neat-surface_23-2148252769.jpg"
            imageAlt="Luxury residential house with a newly installed dark roof"
            showDimOverlay={true}
            textPosition="top"
            testimonials={[
              {
                name: "Robert G.",                handle: "Homeowner",                testimonial: "Summit Peak Roofing replaced our entire roof efficiently and professionally. The quality is outstanding!",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/middle-age-latin-businesswoman-smiling-happy-standing-with-arms-crossed-gesture-city_839833-17431.jpg",                imageAlt: "Robert G."},
              {
                name: "Emily D.",                handle: "Property Manager",                testimonial: "Excellent work on our multi-unit property. Their team handled everything from inspection to completion flawlessly.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg",                imageAlt: "Emily D."},
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Why Homeowners Trust Us"
            tagIcon={BadgeCheck}
            tagAnimation="slide-up"
            title="Unwavering Commitment to Quality, Safety, and Lasting Results."
            description="At Summit Peak Roofing, we don't just build roofs; we build trust. With every project, our dedication to superior craftsmanship, premium materials, and unparalleled customer service shines through. We ensure your home is protected with a roof built to withstand the test of time."
            subdescription="Serving Our Community for Over 20 Years"
            icon={Award}
            imageSrc="http://img.b2bpic.net/free-photo/portrait-industrial-worker-standing-by-metal-silo-storage-tank_342744-447.jpg"
            imageAlt="Professional roofer inspecting a roof"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNineteen
            tag="Our Services"
            tagIcon={Hammer}
            title="Comprehensive Roofing Solutions"
            description="Quality craftsmanship and reliable service for every project."
            buttonAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            imageContainerClassName="!rotate-0 !aspect-square"
            features={[
              {
                tag: "Repair",                title: "Roof Repair",                subtitle: "Expert Damage Restoration",                description: "From minor leaks to significant damage, our skilled technicians provide prompt and effective roof repair services to extend the life of your roof.",                imageSrc: "http://img.b2bpic.net/free-photo/roof-old-residential-building-village-museum-bucharest-romania_1268-21641.jpg",                imageAlt: "Roof repair in progress with tools"},
              {
                tag: "Replacement",                title: "Roof Replacement",                subtitle: "Durable New Installations",                description: "Upgrade your home's protection and curb appeal with a brand-new roof. We offer a wide selection of high-quality materials and expert installation.",                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-roof_23-2149343671.jpg",                imageAlt: "New roof installation on a modern house"},
              {
                tag: "Restoration",                title: "Storm Damage Restoration",                subtitle: "Rapid Response & Recovery",                description: "When disaster strikes, count on us for swift storm damage assessment and restoration, working with your insurance to restore your roof quickly.",                imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530697.jpg",                imageAlt: "Damaged roof after a storm with a tarp"},
              {
                tag: "Commercial",                title: "Commercial Roofing",                subtitle: "Reliable Business Protection",                description: "Protect your business assets with our expert commercial roofing services, tailored for durability and performance across various property types.",                imageSrc: "http://img.b2bpic.net/free-photo/building-corner-with-sky_23-2148106888.jpg",                imageAlt: "Commercial building roof with HVAC units"},
              {
                tag: "Inspection",                title: "Roof Inspections",                subtitle: "Thorough Condition Reports",                description: "Proactive inspections identify potential issues before they escalate, ensuring your roof remains in optimal condition year after year.",                imageSrc: "http://img.b2bpic.net/free-photo/roof-old-residential-building-village-museum-bucharest-romania_1268-21641.jpg",                imageAlt: "Roofer inspecting a residential roof"},
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamCardSix
            title="Why Homeowners Choose Summit Peak Roofing"
            description="Our commitment to excellence ensures your peace of mind."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Certified & Experienced",                role: "Our team consists of highly trained and certified roofing specialists.",                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-practicing-tai-chi-outside_23-2149893705.jpg",                imageAlt: "Certified roofer"},
              {
                id: "2",                name: "Premium Materials",                role: "We use only the highest-grade, durable materials for every project.",                imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg",                imageAlt: "High-quality roofing shingles"},
              {
                id: "3",                name: "Guaranteed Workmanship",                role: "Enjoy long-term peace of mind with our comprehensive workmanship warranties.",                imageSrc: "http://img.b2bpic.net/free-photo/future-house-blueprint-mortgage-form_23-2147764234.jpg",                imageAlt: "Document with a warranty seal"},
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardOne
            tag="Our Portfolio"
            title="Before & After Project Gallery"
            description="Witness the dramatic transformations of our recent roofing projects."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="four-items-2x2-equal-grid"
            animationType="slide-up"
            members={[
              {
                id: "1",                name: "Historic Home Renovation",                role: "New asphalt shingle roof, enhancing classic curb appeal.",                imageSrc: "http://img.b2bpic.net/free-photo/front-view-front-door-with-white-wall-tree_23-2149360609.jpg",                imageAlt: "Renovated historic home with new roof"},
              {
                id: "2",                name: "Modern Residential Upgrade",                role: "Sleek metal roof installation for contemporary aesthetics.",                imageSrc: "http://img.b2bpic.net/free-photo/white-tiled-building-blue-sky_181624-6378.jpg",                imageAlt: "Modern home with a new metal roof"},
              {
                id: "3",                name: "Storm Damaged Roof Repair",                role: "Full recovery and replacement after severe weather damage.",                imageSrc: "http://img.b2bpic.net/free-photo/view-deserted-decaying-house-nature_23-2150166639.jpg",                imageAlt: "Repaired storm-damaged roof"},
              {
                id: "4",                name: "Commercial Building Reroof",                role: "Durable TPO membrane roof for enhanced commercial protection.",                imageSrc: "http://img.b2bpic.net/free-photo/image-city_171337-19906.jpg",                imageAlt: "Commercial building with newly installed TPO roof"},
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTag="Client Success Stories"
            cardTagIcon={Star}
            cardTitle="Hear directly from our satisfied homeowners and business clients who trust Summit Peak Roofing."
            buttons={[{ text: "Get a Free Estimate", href: "#contact" }]}            buttonAnimation="slide-up"
            cardAnimation="slide-up"
            useInvertedBackground={false}
            testimonials={[
              {
                id: "1",                name: "John P.",                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",                imageAlt: "John P."},
              {
                id: "2",                name: "Maria S.",                imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-smiling-young-woman_181624-40759.jpg",                imageAlt: "Maria S."},
              {
                id: "3",                name: "David L.",                imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3551.jpg",                imageAlt: "David L."},
              {
                id: "4",                name: "Sarah W.",                imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-black-girl_641386-723.jpg",                imageAlt: "Sarah W."},
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            tag="FAQ"
            title="Common Questions About Roofing"
            description="Find answers to frequently asked questions about our services and process."
            textboxLayout="default"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            faqs={[
              {
                id: "1",                title: "How do I know if my roof needs repair or replacement?",                content: "Signs include missing or cracked shingles, visible leaks, sagging, or granules in your gutters. Our free inspection can accurately assess the condition and recommend the best solution."},
              {
                id: "2",                title: "Do you offer free estimates?",                content: "Yes, we provide complimentary, no-obligation roof inspections and detailed estimates for all potential projects. Contact us to schedule yours."},
              {
                id: "3",                title: "Are you licensed and insured?",                content: "Absolutely. Summit Peak Roofing is fully licensed, bonded, and insured, giving you complete peace of mind throughout the entire project."},
              {
                id: "4",                title: "What types of roofing materials do you work with?",                content: "We specialize in asphalt shingles, metal roofing, tile roofing, flat roofs (TPO/PVC), and more, offering a wide range of options to suit your aesthetic and budget."},
              {
                id: "5",                title: "How long does a roof replacement take?",                content: "Most residential roof replacements can be completed within 1-3 days, depending on the size and complexity of your roof. We strive for minimal disruption."},
              {
                id: "6",                title: "Do you assist with insurance claims for storm damage?",                content: "Yes, we have extensive experience working with insurance companies and can help guide you through the claims process to ensure a smooth restoration."},
            ]}
          />
        </div>

        <div id="contact" data-section="contact" className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              src="http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15702.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <ContactSplitForm
            title="Get Your Free Roofing Estimate"
            description="Fill out the form below to schedule a free, no-obligation inspection and estimate. We'll get back to you promptly."
            useInvertedBackground={false}
            mediaAnimation="none"
            buttonText="Request Estimate"
            contentClassName="!grid-cols-1 max-w-[600px] mx-auto"
            mediaWrapperClassName="hidden"
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            multiSelect={{
              name: "service",              label: "Interested Service",              options: ["Roof Repair", "Roof Replacement", "Storm Damage Restoration", "Commercial Roofing", "Roof Inspection", "Other"],
            }}
            textarea={{ name: "message", placeholder: "Tell us about your roofing needs...", rows: 4, required: true }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Services",                items: [
                  { label: "Roof Repair", href: "#services" },
                  { label: "Roof Replacement", href: "#services" },
                  { label: "Storm Damage", href: "#services" },
                  { label: "Commercial Roofing", href: "#services" },
                  { label: "Roof Inspections", href: "#services" },
                ],
              },
              {
                title: "Company",                items: [
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Project Gallery", href: "#team" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "FAQ", href: "#faq" },
                ],
              },
              {
                title: "Contact",                items: [
                  { label: "(555) 888-7777", href: "tel:5558887777" },
                  { label: "info@summitpeakroofing.com", href: "mailto:info@summitpeakroofing.com" },
                  { label: "123 Peakside Ave, City, State 90210" },
                ],
              },
            ]}
            bottomLeftText="© 2026 Summit Peak Roofing"
            bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
