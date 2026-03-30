import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ajoutez votre logique d'envoi ici
  };

  return (
    <>
      <div
        className="flex-1"
        style={{
          borderColor: "rgb(36, 48, 66)",
          borderWidth: "0px",
          borderStyle: "solid",
          flex: "1 1 0%",
          color: "rgb(220, 224, 229)",
          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
          fontSize: "16px",
          letterSpacing: "-0.16px",
        }}
      >
        <div
          className="min-h-screen"
          style={{
            minHeight: "100vh",
            backgroundColor: "rgb(11, 17, 25)",
          }}
        >
          {/* Hero Section */}
          <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
              overflow: "hidden",
              paddingTop: "7rem",
              paddingBottom: "7rem",
              backgroundColor: "rgb(10, 31, 41)",
              backgroundImage:
                "radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%), radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%), radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)",
            }}
          >
            <div
              className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center"
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "64rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
                style={{
                  borderColor: "rgba(45, 155, 210, 0.3)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: "9999px",
                  padding: "0.375rem 1rem",
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "rgb(45, 155, 210)",
                }}
              >
                Disponibles pour votre projet
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  letterSpacing: "-0.025em",
                  lineHeight: "1",
                  fontSize: "3.75rem",
                  marginBottom: "1rem",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Contactez-Nous
              </h1>
              <p
                className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  maxWidth: "42rem",
                  fontSize: "21px",
                  lineHeight: "1.3",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Une question, un projet, un partenariat ? Notre équipe est à
                votre écoute et vous répondra sous 24 heures.
              </p>
            </div>
          </section>

          {/* Contact Cards */}
          <section
            className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-10"
            style={{
              zIndex: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-2.5rem",
              maxWidth: "72rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                gap: "1rem",
              }}
            >
              {/* Location Card */}
              <div>
                <div
                  className="rounded-2xl p-6 shadow-sm flex items-start gap-4 h-full relative overflow-hidden group"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    position: "relative",
                    display: "flex",
                    height: "110.6px",
                    alignItems: "flex-start",
                    gap: "1rem",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                    backgroundColor: "rgb(11, 17, 25)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      height: "0.125rem",
                      width: "100%",
                      backgroundColor: "rgb(45, 155, 210)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  ></div>
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      display: "flex",
                      height: "3rem",
                      width: "3rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "24px",
                      backgroundColor: "rgba(45, 155, 210, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      style={{ color: "rgb(45, 155, 210)" }}
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{
                        marginBottom: "0.375rem",
                        fontSize: "12px",
                        lineHeight: "1.35",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "rgb(123, 137, 157)",
                      }}
                    >
                      Localisation
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.375",
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      Lokossa, Département du Mono
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.375",
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      République du Bénin
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <a href="tel:+22997000000" className="block">
                <div
                  className="rounded-2xl p-6 shadow-sm flex items-start gap-4 h-full relative overflow-hidden group"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    position: "relative",
                    display: "flex",
                    height: "110.6px",
                    alignItems: "flex-start",
                    gap: "1rem",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                    backgroundColor: "rgb(11, 17, 25)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      height: "0.125rem",
                      width: "100%",
                      backgroundColor: "rgb(40, 189, 95)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  ></div>
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      display: "flex",
                      height: "3rem",
                      width: "3rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "24px",
                      backgroundColor: "rgba(40, 189, 95, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      style={{ color: "rgb(40, 189, 95)" }}
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{
                        marginBottom: "0.375rem",
                        fontSize: "12px",
                        lineHeight: "1.35",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "rgb(123, 137, 157)",
                      }}
                    >
                      Téléphone
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.375",
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      +229 97 XX XX XX
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.375",
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      +229 61 XX XX XX
                    </p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:contact@benilab-services.com" className="block">
                <div
                  className="rounded-2xl p-6 shadow-sm flex items-start gap-4 h-full relative overflow-hidden group"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    position: "relative",
                    display: "flex",
                    height: "110.6px",
                    alignItems: "flex-start",
                    gap: "1rem",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                    backgroundColor: "rgb(11, 17, 25)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      height: "0.125rem",
                      width: "100%",
                      backgroundColor: "rgb(45, 155, 210)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  ></div>
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      display: "flex",
                      height: "3rem",
                      width: "3rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "24px",
                      backgroundColor: "rgba(45, 155, 210, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      style={{ color: "rgb(45, 155, 210)" }}
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{
                        marginBottom: "0.375rem",
                        fontSize: "12px",
                        lineHeight: "1.35",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "rgb(123, 137, 157)",
                      }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.375",
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      contact@benilab-services.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Hours Section */}
          <section
            className="max-w-6xl mx-auto px-4 sm:px-6 mt-4"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
              maxWidth: "72rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              className="rounded-2xl p-5 shadow-sm"
              style={{
                borderColor: "rgb(36, 48, 66)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "1rem",
                padding: "1.25rem",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                backgroundColor: "rgb(11, 17, 25)",
              }}
            >
              <div
                className="flex items-center gap-3 mb-4"
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "24px",
                    backgroundColor: "rgba(40, 189, 95, 0.1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    style={{ color: "rgb(40, 189, 95)" }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.35",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "rgb(123, 137, 157)",
                    }}
                  >
                    Horaires d'ouverture
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      fontWeight: 600,
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Nos heures de bureau
                  </p>
                </div>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "24px",
                    backgroundColor: "rgba(40, 189, 95, 0.05)",
                    padding: "0.75rem 1rem",
                    borderColor: "rgba(40, 189, 95, 0.2)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Lundi – Vendredi
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      fontWeight: 600,
                      color: "rgb(40, 189, 95)",
                    }}
                  >
                    8h00 – 18h00
                  </span>
                </div>
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "24px",
                    backgroundColor: "rgba(40, 189, 95, 0.05)",
                    padding: "0.75rem 1rem",
                    borderColor: "rgba(40, 189, 95, 0.2)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Samedi
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      fontWeight: 600,
                      color: "rgb(40, 189, 95)",
                    }}
                  >
                    9h00 – 13h00
                  </span>
                </div>
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "24px",
                    backgroundColor: "rgba(32, 44, 60, 0.3)",
                    padding: "0.75rem 1rem",
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Dimanche
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.65",
                      fontWeight: 600,
                      color: "rgb(123, 137, 157)",
                    }}
                  >
                    Fermé
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Form and Map Section */}
          <section
            className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "72rem",
              padding: "5rem 1.5rem",
            }}
          >
            <div
              className="grid lg:grid-cols-2 gap-10 items-start"
              style={{
                display: "grid",
                alignItems: "flex-start",
                gap: "2.5rem",
                gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
              }}
            >
              {/* Form */}
              <div
                className="rounded-2xl shadow-sm overflow-hidden"
                style={{
                  borderColor: "rgb(36, 48, 66)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                  backgroundColor: "rgb(11, 17, 25)",
                }}
              >
                <div
                  className="px-7 py-5 border-b"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "0px 0px 1px",
                    borderStyle: "solid",
                    backgroundColor: "rgba(32, 44, 60, 0.2)",
                    padding: "1.25rem 1.75rem",
                  }}
                >
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      letterSpacing: "-0.02em",
                      lineHeight: "1.8",
                      fontSize: "18px",
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Envoyez-nous un message
                  </h2>
                  <p
                    className="text-sm mt-0.5"
                    style={{
                      marginTop: "0.125rem",
                      fontSize: "14px",
                      lineHeight: "1.65",
                      color: "rgb(123, 137, 157)",
                    }}
                  >
                    Les champs marqués{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(45, 155, 210)" }}
                    >
                      *
                    </span>{" "}
                    sont obligatoires
                  </p>
                </div>
                <form
                  className="px-7 py-7 space-y-5"
                  onSubmit={handleSubmit}
                  style={{
                    padding: "1.75rem",
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-medium"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          fontWeight: 500,
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Nom complet{" "}
                        <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Jean Dupont"
                        required
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          marginTop: "6px",
                          padding: "0.25rem 0.75rem",
                          display: "flex",
                          height: "2.25rem",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-medium"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          fontWeight: 500,
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Email{" "}
                        <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="vous@exemple.com"
                        required
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          marginTop: "6px",
                          padding: "0.25rem 0.75rem",
                          display: "flex",
                          height: "2.25rem",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-medium"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          fontWeight: 500,
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+229 97 XX XX XX"
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          marginTop: "6px",
                          padding: "0.25rem 0.75rem",
                          display: "flex",
                          height: "2.25rem",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-medium"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          fontWeight: 500,
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Sujet{" "}
                        <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        required
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          marginTop: "6px",
                          padding: "0.5rem 0.75rem",
                          display: "flex",
                          height: "2.25rem",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                          backgroundColor: "transparent",
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        <option
                          value=""
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Choisir un sujet
                        </option>
                        <option
                          value="devis"
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Demande de devis
                        </option>
                        <option
                          value="info"
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Information service
                        </option>
                        <option
                          value="formation"
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Formation
                        </option>
                        <option
                          value="partenariat"
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Partenariat
                        </option>
                        <option
                          value="autre"
                          style={{ backgroundColor: "rgb(11, 17, 25)" }}
                        >
                          Autre
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="text-sm font-medium"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.65",
                        fontWeight: 500,
                        color: "rgb(220, 224, 229)",
                      }}
                    >
                      Message{" "}
                      <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors"
                      placeholder="Décrivez votre besoin ou posez votre question…"
                      required
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        transition:
                          "color 0.2s, background-color 0.2s, border-color 0.2s",
                        fontFamily: "inherit",
                        fontSize: "14px",
                        marginTop: "6px",
                        padding: "0.5rem 0.75rem",
                        resize: "none",
                        borderRadius: "10px",
                        backgroundColor: "rgb(11, 17, 25)",
                        color: "rgb(220, 224, 229)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full font-semibold h-11 gap-2"
                    style={{
                      transition:
                        "color 0.2s, background-color 0.2s, border-color 0.2s",
                      fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      marginTop: "20px",
                      padding: "0.5rem 1rem",
                      backgroundColor: "rgb(45, 155, 210)",
                      display: "inline-flex",
                      height: "2.75rem",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      borderRadius: "10px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Map Card */}
                <div
                  className="rounded-2xl overflow-hidden border shadow-sm"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                    backgroundColor: "rgb(11, 17, 25)",
                  }}
                >
                  <div
                    className="relative h-56 flex items-center justify-center"
                    style={{
                      position: "relative",
                      display: "flex",
                      height: "14rem",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundImage:
                        "linear-gradient(135deg, rgb(8, 21, 37) 0%, rgb(20, 37, 61) 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        opacity: 0.2,
                        backgroundImage:
                          "linear-gradient(rgba(220, 224, 229, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 224, 229, 0.3) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        opacity: 0.1,
                        backgroundImage:
                          "linear-gradient(45deg, transparent 40%, rgb(138, 150, 168) 41%, rgb(138, 150, 168) 59%, transparent 60%), linear-gradient(-45deg, transparent 40%, rgb(138, 150, 168) 41%, rgb(138, 150, 168) 59%, transparent 60%)",
                        backgroundSize: "80px 80px",
                      }}
                    ></div>
                    <div
                      className="relative flex flex-col items-center gap-3 z-10"
                      style={{
                        position: "relative",
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div className="relative">
                        <div
                          className="absolute -inset-3 rounded-full animate-ping"
                          style={{
                            position: "absolute",
                            inset: "-0.75rem",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(45, 155, 210, 0.2)",
                            animation:
                              "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                          }}
                        ></div>
                        <div
                          className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center"
                          style={{
                            borderColor: "rgba(45, 155, 210, 0.5)",
                            borderWidth: "2px",
                            borderStyle: "solid",
                            position: "relative",
                            display: "flex",
                            height: "3.5rem",
                            width: "3.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(45, 155, 210, 0.25)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-7 w-7"
                            style={{ color: "rgb(45, 155, 210)" }}
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <p
                          className="text-white font-bold text-sm"
                          style={{
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontSize: "14px",
                            lineHeight: "1.65",
                            fontWeight: 700,
                            color: "rgb(255, 255, 255)",
                          }}
                        >
                          BENILAB SERVICES
                        </p>
                        <p
                          className="text-white/60 text-xs mt-0.5"
                          style={{
                            marginTop: "0.125rem",
                            fontSize: "12px",
                            lineHeight: "1.35",
                            color: "rgba(255, 255, 255, 0.6)",
                          }}
                        >
                          Lokossa, Bénin 🇧🇯
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="px-5 py-4 border-t"
                    style={{
                      borderColor: "rgb(36, 48, 66)",
                      borderWidth: "1px 0px 0px",
                      borderStyle: "solid",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 shrink-0 mt-0.5"
                        style={{ color: "rgb(45, 155, 210)" }}
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.65",
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          Lokossa, Département du Mono
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{
                            marginTop: "0.125rem",
                            fontSize: "12px",
                            lineHeight: "1.35",
                            color: "rgb(123, 137, 157)",
                          }}
                        >
                          République du Bénin, Afrique de l'Ouest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div
                  className="rounded-2xl p-6 shadow-sm"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                    backgroundColor: "rgb(11, 17, 25)",
                  }}
                >
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      letterSpacing: "-0.02em",
                      fontSize: "inherit",
                      marginBottom: "0.25rem",
                      color: "rgb(220, 224, 229)",
                    }}
                  >
                    Suivez-nous
                  </h3>
                  <p
                    className="text-xs mb-4"
                    style={{
                      marginBottom: "1rem",
                      fontSize: "12px",
                      lineHeight: "1.35",
                      color: "rgb(123, 137, 157)",
                    }}
                  >
                    Retrouvez-nous sur les réseaux sociaux
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://facebook.com/benilab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium group transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        transition: "all 0.2s",
                        color: "rgb(123, 137, 157)",
                        textDecoration: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        borderRadius: "24px",
                        backgroundColor: "rgba(32, 44, 60, 0.2)",
                        padding: "0.625rem 1rem",
                        fontSize: "14px",
                        lineHeight: "1.65",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://linkedin.com/company/benilab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium group transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        transition: "all 0.2s",
                        color: "rgb(123, 137, 157)",
                        textDecoration: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        borderRadius: "24px",
                        backgroundColor: "rgba(32, 44, 60, 0.2)",
                        padding: "0.625rem 1rem",
                        fontSize: "14px",
                        lineHeight: "1.65",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://wa.me/22997000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium group transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        transition: "all 0.2s",
                        color: "rgb(123, 137, 157)",
                        textDecoration: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        borderRadius: "24px",
                        backgroundColor: "rgba(32, 44, 60, 0.2)",
                        padding: "0.625rem 1rem",
                        fontSize: "14px",
                        lineHeight: "1.65",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://youtube.com/@benilab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium group transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        transition: "all 0.2s",
                        color: "rgb(123, 137, 157)",
                        textDecoration: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        borderRadius: "24px",
                        backgroundColor: "rgba(32, 44, 60, 0.2)",
                        padding: "0.625rem 1rem",
                        fontSize: "14px",
                        lineHeight: "1.65",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      YouTube
                    </a>
                  </div>
                  <a
                    href="https://wa.me/22997000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                    style={{
                      transition: "all 0.2s",
                      color: "rgb(22, 163, 74)",
                      textDecoration: "inherit",
                      marginTop: "0.75rem",
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      borderRadius: "24px",
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      padding: "0.75rem 1rem",
                      fontSize: "14px",
                      lineHeight: "1.65",
                      fontWeight: 600,
                      borderColor: "rgba(34, 197, 94, 0.2)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                    </svg>
                    Discuter sur WhatsApp (+229 97 XX XX XX)
                  </a>
                </div>

                {/* Quote Card */}
                <div
                  className="relative rounded-2xl p-6 overflow-hidden shadow-md"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 1px 3px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px -1px",
                    background:
                      "linear-gradient(135deg, rgb(28, 116, 160), rgb(29, 86, 114))",
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
                  <div className="relative">
                    <p
                      className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1"
                      style={{
                        marginBottom: "0.25rem",
                        fontSize: "12px",
                        lineHeight: "1.35",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      Besoin d'une estimation ?
                    </p>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        letterSpacing: "-0.02em",
                        lineHeight: "1.8",
                        fontSize: "18px",
                        marginBottom: "0.5rem",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Demandez un devis gratuit
                    </h3>
                    <p
                      className="text-sm text-white/80 mb-5 leading-relaxed"
                      style={{
                        marginBottom: "1.25rem",
                        fontSize: "14px",
                        lineHeight: "1.625",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      Obtenez une estimation personnalisée pour votre projet en
                      quelques minutes.
                    </p>
                    <a href="https://benilab-services-hub-zqmiky2c.sites.blink.new/devis">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 font-semibold gap-2 h-10"
                        style={{
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "0.5rem 1rem",
                          backgroundColor: "rgb(255, 255, 255)",
                          display: "inline-flex",
                          height: "2.5rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "rgb(45, 155, 210)",
                          cursor: "pointer",
                        }}
                      >
                        Demander un devis
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        
        .transition-opacity {
          transition: opacity 0.3s;
        }
        
        .transition-all {
          transition: all 0.2s;
        }
        
        .hover\\:scale-\\[1\\.02\\]:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default ContactPage;
