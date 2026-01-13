import React, { useEffect, useState } from "react";

/* ================= LOAN TRACKER IMAGES ================= */
import loanWelcomeImg from "../assets/Loan Tracker - PORTFOLIO/Welcome Screen.png";
import loanAddImg from "../assets/Loan Tracker - PORTFOLIO/Add Loan.png";
import loanDashboardAllImg from "../assets/Loan Tracker - PORTFOLIO/Dashboard - All.png";
import loanDashboardItemImg from "../assets/Loan Tracker - PORTFOLIO/Dashboard - Item.png";
import loanEditImg from "../assets/Loan Tracker - PORTFOLIO/Edit Loan.png";
import loanMobileImg from "../assets/Loan Tracker - PORTFOLIO/Mobile.png";

/* ================= DORMHONORIO IMAGES ================= */
import dormWelcomeImg from "../assets/DormHonorio - PORTFOLIO/Welcome Screen.png";
import dormLoginImg from "../assets/DormHonorio - PORTFOLIO/Log In Page.png";
import dormSignUpImg from "../assets/DormHonorio - PORTFOLIO/Sign Up Page.png";
import dormTenantHomeImg from "../assets/DormHonorio - PORTFOLIO/Tenant - Home.png";
import dormTenantMatchesImg from "../assets/DormHonorio - PORTFOLIO/Tenant - Matches.png";
import dormOwnerHomeImg from "../assets/DormHonorio - PORTFOLIO/Dorm Owner - Home.png";
import dormOwnerListingsImg from "../assets/DormHonorio - PORTFOLIO/Dorm Owner - Listings.png";
import dormAdminHomeImg from "../assets/DormHonorio - PORTFOLIO/Admin - Home.png";
import dormAdminUsersImg from "../assets/DormHonorio - PORTFOLIO/Admin - Users.png";

/* ================= MEDIZONE IMAGES ================= */
import welcomeImg from "../assets/MediZone - PORTFOLIO/Welcome Screen.png";
import mainPickingImg from "../assets/MediZone - PORTFOLIO/Main-Picking.png";
import registrationImg from "../assets/MediZone - PORTFOLIO/Patient Registration.png";
import appointmentImg from "../assets/MediZone - PORTFOLIO/Appointment Scheduling.png";
import doctorImg from "../assets/MediZone - PORTFOLIO/Doctor Directory.png";
import emergencyImg from "../assets/MediZone - PORTFOLIO/Emergency Services.png";
import billingImg from "../assets/MediZone - PORTFOLIO/Billing and Payments.png";
import pharmacyImg from "../assets/MediZone - PORTFOLIO/Pharmacy Services.png";
import healthImg from "../assets/MediZone - PORTFOLIO/Health Information.png";

/* ================= FUREVER CARE IMAGES ================= */
import furHomeImg from "../assets/FurEver Care - PORTFOLIO/Home.png";
import furFeaturesImg from "../assets/FurEver Care - PORTFOLIO/Features.png";
import furAboutImg from "../assets/FurEver Care - PORTFOLIO/About.png";
import furHelpImg from "../assets/FurEver Care - PORTFOLIO/Help Us.png";
import furReviewsImg from "../assets/FurEver Care - PORTFOLIO/Reviews.png";
import furContactImg from "../assets/FurEver Care - PORTFOLIO/Contact.png";
import furLoginImg from "../assets/FurEver Care - PORTFOLIO/Log IN.png";
import furFooterImg from "../assets/FurEver Care - PORTFOLIO/Footer.png";

/* ================= MOOD MENU IMAGES ================= */
import moodHomeImg from "../assets/Mood Menu - PORTFOLIO/Home.png";
import moodAboutImg from "../assets/Mood Menu - PORTFOLIO/About.png";
import moodFooterImg from "../assets/Mood Menu - PORTFOLIO/Footer.png";
import moodHowImg from "../assets/Mood Menu - PORTFOLIO/How do you feel.png";
import moodProfileImg from "../assets/Mood Menu - PORTFOLIO/Profile.png";
import moodRecipesImg from "../assets/Mood Menu - PORTFOLIO/Recipes.png";
import moodRecommendationImg from "../assets/Mood Menu - PORTFOLIO/Recommendation.png";
import moodSavedImg from "../assets/Mood Menu - PORTFOLIO/Saved.png";
import moodWellnessImg from "../assets/Mood Menu - PORTFOLIO/Wellness.png";
import moodWhatImg from "../assets/Mood Menu - PORTFOLIO/What we do.png";

import agricartHomeImg from "../assets/Farm Produce - PORTFOLIO/Home.png";
import agricartAboutImg from "../assets/Farm Produce - PORTFOLIO/About.png";
import agricartCategoryImg from "../assets/Farm Produce - PORTFOLIO/Category.png";
import agricartFreshImg from "../assets/Farm Produce - PORTFOLIO/Fresh Vegetables Pick.png";
import agricartLoginImg from "../assets/Farm Produce - PORTFOLIO/Login.png";
import agricartReviewsImg from "../assets/Farm Produce - PORTFOLIO/Reviews.png";

/* ================= AV GUIDES IMAGES ================= */
import avHomeImg from "../assets/Travel Guide - PORTFOLIO/Home.png";
import avHomeSettingsImg from "../assets/Travel Guide - PORTFOLIO/Home - Settings.png";
import avHomeLanguageImg from "../assets/Travel Guide - PORTFOLIO/Home - Language.png";
import avSearchImg from "../assets/Travel Guide - PORTFOLIO/Search.png";
import avFlightsImg from "../assets/Travel Guide - PORTFOLIO/Flights.png";
import avFlightHotelImg from "../assets/Travel Guide - PORTFOLIO/Flight + Hotel.png";
import avAttractionsImg from "../assets/Travel Guide - PORTFOLIO/Attractions.png";
import avTravelGuidesImg from "../assets/Travel Guide - PORTFOLIO/Travel Guides.png";
import avTravelGuidesManilaImg from "../assets/Travel Guide - PORTFOLIO/Travel Guides - Manila.png";
import avBlogImg from "../assets/Travel Guide - PORTFOLIO/Blog.png";
import avBlogManilaImg from "../assets/Travel Guide - PORTFOLIO/Blog-Manila.png";


export default function ProjectModal({ open, projectId, onClose }) {
  const projectData = {
    "loan-tracker": [
      { img: loanWelcomeImg, description: "Welcome screen of Loan Tracker showing an overview of active loans and balances." },
      { img: loanAddImg, description: "Add Loan page allowing users to input new loans and repayment schedules." },
      { img: loanDashboardAllImg, description: "Dashboard - All view showing a complete overview of all loans and their statuses." },
      { img: loanDashboardItemImg, description: "Dashboard - Item view displaying detailed information for individual loans." },
      { img: loanEditImg, description: "Edit Loan page allowing users to modify existing loan details." },
      { img: loanMobileImg, description: "Mobile-friendly interface ensuring Loan Tracker works seamlessly on phones and tablets." },
    ],

    "dormhonorio": [
      { img: dormWelcomeImg, description: "Welcome screen of DormHonorio, the dormitory booking and roommate matching app." },
      { img: dormLoginImg, description: "Log In page for students, dorm owners, and admins to access their accounts." },
      { img: dormSignUpImg, description: "Sign Up page allowing new users to create accounts." },
      { img: dormTenantHomeImg, description: "Tenant Home screen showing available dormitories near PamSU." },
      { img: dormTenantMatchesImg, description: "Tenant Matches screen displaying recommended roommates based on profile answers." },
      { img: dormOwnerHomeImg, description: "Dorm Owner Home page managing listings and account info." },
      { img: dormOwnerListingsImg, description: "Dorm Owner Listings page to add and manage dormitory postings." },
      { img: dormAdminHomeImg, description: "Admin Home dashboard for overall platform management." },
      { img: dormAdminUsersImg, description: "Admin Users management screen for monitoring student and dorm owner accounts." },
    ],

    medizone: [
      { img: welcomeImg, description: "Welcome screen of MediZone, introducing users to the hospital kiosk system." },
      { img: mainPickingImg, description: "Main picking screen allowing patients to quickly choose available hospital services." },
      { img: registrationImg, description: "Patient registration screen for creating and managing patient profiles." },
      { img: appointmentImg, description: "Appointment scheduling interface for booking consultations with doctors." },
      { img: doctorImg, description: "Doctor directory displaying available physicians and their specializations." },
      { img: emergencyImg, description: "Emergency services screen providing quick access to urgent assistance." },
      { img: billingImg, description: "Billing and payment interface for handling hospital-related transactions." },
      { img: pharmacyImg, description: "Pharmacy services section for medication-related assistance." },
      { img: healthImg, description: "Health information screen offering medical guidance and hospital resources." },
    ],

    "furever-care": [
      { img: furHomeImg, description: "Home screen introducing FurEver Care's pet care platform." },
      { img: furFeaturesImg, description: "Features overview highlighting health monitoring, breeding, and appointments." },
      { img: furAboutImg, description: "About page explaining platform goals and community values." },
      { img: furHelpImg, description: "Help Us section showing resources and user support options." },
      { img: furReviewsImg, description: "Reviews page displaying testimonials from pet owners." },
      { img: furContactImg, description: "Contact page for inquiries and reaching the support team." },
      { img: furLoginImg, description: "Log In page for user authentication and account access." },
      { img: furFooterImg, description: "Footer containing navigation links and social media connections." },
    ],

    "mood-menu": [
      { img: moodHomeImg, description: "Home screen of Mood Menu introducing the platform and main features." },
      { img: moodAboutImg, description: "About page describing how Mood Menu helps women with PCOS." },
      { img: moodHowImg, description: "How Do You Feel screen lets users select their current mood for tailored meal suggestions." },
      { img: moodProfileImg, description: "Profile screen for managing dietary preferences and personal info." },
      { img: moodRecipesImg, description: "Recipes screen showing PCOS-friendly meals." },
      { img: moodRecommendationImg, description: "Recommendations page presenting suggested meals based on mood and energy." },
      { img: moodSavedImg, description: "Saved recipes page for quick access to favorite meals." },
      { img: moodWellnessImg, description: "Wellness screen for guidance and tips supporting hormone balance and overall health." },
      { img: moodFooterImg, description: "Footer with navigation links and platform information." },
      { img: moodWhatImg, description: "What We Do page explaining platform benefits and approach." },
    ],

    "agricart": [
  { img: agricartHomeImg, description: "Home screen introducing AgriCart's platform and featured produce." },
  { img: agricartAboutImg, description: "About page explaining AgriCart's mission to support sustainable farming." },
  { img: agricartCategoryImg, description: "Category screen showing different types of produce available for purchase." },
  { img: agricartFreshImg, description: "Fresh Vegetables page highlighting high-quality seasonal produce." },
  { img: agricartLoginImg, description: "Login page for user authentication and account access." },
  { img: agricartReviewsImg, description: "Reviews page displaying testimonials from satisfied customers." },
],

"av-guides": [
  { img: avHomeImg, description: "Home screen of AV Guides introducing travel features and main interface." },
  { img: avHomeSettingsImg, description: "Settings screen to customize user preferences." },
  { img: avHomeLanguageImg, description: "Language selection screen for international travelers." },
  { img: avSearchImg, description: "Search interface to find flights, hotels, and destinations." },
  { img: avFlightsImg, description: "Flights screen displaying available flights with pricing and schedules." },
  { img: avFlightHotelImg, description: "Flight + Hotel booking screen for convenient travel planning." },
  { img: avAttractionsImg, description: "Attractions screen showing must-visit spots and recommendations." },
  { img: avTravelGuidesImg, description: "Travel Guides section providing curated advice and itineraries." },
  { img: avTravelGuidesManilaImg, description: "Additional Travel Guides content highlighting Manila destinations." },
  { img: avBlogImg, description: "Blog section offering tips, experiences, and travel stories." },
  { img: avBlogManilaImg, description: "Sample blog post about Manila travel insights." },
],

  };

  const images = projectData[projectId] || [];
  const [current, setCurrent] = useState(0);

  useEffect(() => setCurrent(0), [projectId]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  if (!open || images.length === 0) return null;

  return (
    <div
      className="modal"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(5px)", backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "750px", width: "90%", borderRadius: "15px", overflow: "hidden", backgroundColor: "var(--bg-secondary)", boxShadow: "0 8px 30px rgba(0,0,0,0.4)", position: "relative" }}
      >
        <span
          onClick={onClose}
          style={{ position: "absolute", top: "15px", right: "20px", fontSize: "28px", cursor: "pointer", color: "var(--text-secondary)" }}
        >
          &times;
        </span>

        <div style={{ padding: "1.5rem", textAlign: "center" }}>
          <img
            src={images[current].img}
            alt={`${projectId} screenshot ${current + 1}`}
            style={{ width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "10px", marginBottom: "1rem" }}
          />
          <p style={{ color: "var(--text-secondary)" }}>{images[current].description}</p>

          {images.length > 1 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
              <button onClick={prev} className="modal-button">‹ Previous</button>
              <span style={{ color: "var(--text-secondary)" }}>{current + 1} / {images.length}</span>
              <button onClick={next} className="modal-button">Next ›</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
