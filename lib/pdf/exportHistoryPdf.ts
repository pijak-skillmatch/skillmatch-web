import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { HistoryDetail } from "@/types/history";

// Helper memuat gambar
function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// Warna tema (bisa disesuaikan)
const PRIMARY = "#000080";
const SECONDARY = "#EFF6FF"; // biru sangat muda
const TEXT_DARK = "#1E293B";
const TEXT_LIGHT = "#FFFFFF";

export async function exportHistoryPdf(history: HistoryDetail) {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const pageHeight = pdf.internal.pageSize.height;
  const margin = 20;

  // ---------- HEADER BAR ----------
  pdf.setFillColor(PRIMARY);
  pdf.rect(0, 0, pageWidth, 35, "F"); // bar biru di atas

  // Logo di kanan atas
  try {
    const logoImg = await loadImage("/logo-2.png");
    const logoWidth = 60;
    const logoHeight = 25;
    pdf.addImage(logoImg, "PNG", pageWidth - logoWidth - 15, 5, logoWidth, logoHeight);
  } catch {
    // fallback jika logo gagal
    pdf.setFontSize(10);
    pdf.setTextColor(TEXT_LIGHT);
    pdf.text("SkillMatch AI", pageWidth - 50, 15);
  }

  // Judul laporan di kiri header
  pdf.setTextColor(TEXT_LIGHT);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.text("SkillMatch AI", margin, 18);
  pdf.setFontSize(13);
  pdf.text("Career Intelligence Report", margin, 28);

  // ---------- KOTAK RINGKASAN ----------
  const summaryY = 50;
  pdf.setDrawColor(PRIMARY);
  pdf.setFillColor(SECONDARY);
  pdf.roundedRect(margin, summaryY, pageWidth - 2 * margin, 30, 3, 3, "FD");

  pdf.setTextColor(TEXT_DARK);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.text("Report ID:", margin + 5, summaryY + 10);
  pdf.text("Date:", margin + 5, summaryY + 20);
  pdf.setFont("helvetica", "normal");
  pdf.text(String(history.id), margin + 40, summaryY + 10);
  pdf.text(new Date().toLocaleDateString(), margin + 40, summaryY + 20);

  pdf.setFont("helvetica", "bold");
  pdf.text("Top Industry:", margin + 100, summaryY + 10);
  pdf.text("Confidence:", margin + 100, summaryY + 20);
  pdf.setFont("helvetica", "normal");
  pdf.text(history.industry, margin + 130, summaryY + 10);
  pdf.text(`${(history.confidence * 100).toFixed(1)}%`, margin + 130, summaryY + 20);

  // ---------- TABEL PREDIKSI INDUSTRI ----------
  const industryTableY = summaryY + 45;
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(PRIMARY);
  pdf.text("Industry Predictions", margin, industryTableY);

  const predictions = history.result_json.industry_predictions as {
    industry: string;
    probability: number;
  }[];

  autoTable(pdf, {
    startY: industryTableY + 8,
    margin: { left: margin, right: margin },
    head: [["Industry", "Probability"]],
    body: predictions.map((item) => [item.industry, `${(item.probability * 100).toFixed(1)}%`]),
    theme: "grid",
    headStyles: {
      fillColor: PRIMARY,
      textColor: TEXT_LIGHT,
      fontStyle: "bold",
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 10,
      textColor: TEXT_DARK,
    },
    alternateRowStyles: {
      fillColor: SECONDARY,
    },
    tableLineColor: "#CBD5E1",
    tableLineWidth: 0.1,
  });

  // ---------- CURRENT SKILLS ----------
  const skills = history.input_skills.join(", ");
  const skillSectionY = (pdf as any).lastAutoTable.finalY + 15;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(PRIMARY);
  pdf.text("Current Skills", margin, skillSectionY);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.setTextColor(TEXT_DARK);
  pdf.text(skills, margin, skillSectionY + 10, {
    maxWidth: pageWidth - 2 * margin,
  });

  // Garis pemisah tipis
  pdf.setDrawColor("#CBD5E1");
  pdf.line(margin, skillSectionY + 18, pageWidth - margin, skillSectionY + 18);

  // ---------- REKOMENDASI SKILL ----------
  const recommended = history.result_json.recommended_skills as {
    skill: string;
    score: number;
  }[];

  const recTableY = skillSectionY + 28;
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(PRIMARY);
  pdf.text("Recommended Skills", margin, recTableY);

  autoTable(pdf, {
    startY: recTableY + 8,
    margin: { left: margin, right: margin },
    head: [["Skill", "Relevance Score"]],
    body: recommended.map((item) => [item.skill, item.score.toFixed(2)]),
    theme: "grid",
    headStyles: {
      fillColor: PRIMARY,
      textColor: TEXT_LIGHT,
      fontStyle: "bold",
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 10,
      textColor: TEXT_DARK,
    },
    alternateRowStyles: {
      fillColor: SECONDARY,
    },
    tableLineColor: "#CBD5E1",
    tableLineWidth: 0.1,
  });

  // ---------- LEARNING PATH ----------
  const learningPath = history.result_json.learning_path as {
    level: string;
    skills: string[];
  }[];

  const learningY = (pdf as any).lastAutoTable.finalY + 15;
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(PRIMARY);
  pdf.text("Learning Path", margin, learningY);

  autoTable(pdf, {
    startY: learningY + 8,
    margin: { left: margin, right: margin },
    head: [["Level", "Skills"]],
    body: learningPath.map((item) => [item.level, item.skills.join(", ") || "-"]),
    theme: "grid",
    headStyles: {
      fillColor: PRIMARY,
      textColor: TEXT_LIGHT,
      fontStyle: "bold",
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 10,
      textColor: TEXT_DARK,
      cellPadding: { top: 4, right: 4, bottom: 4, left: 4 },
    },
    alternateRowStyles: {
      fillColor: SECONDARY,
    },
    tableLineColor: "#CBD5E1",
    tableLineWidth: 0.1,
    columnStyles: {
      1: { cellWidth: "auto" },
    },
  });

  // ---------- FOOTER DENGAN NOMOR HALAMAN ----------
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(9);
    pdf.setTextColor("#64748B");
    pdf.text(`Generated by SkillMatch AI  •  Page ${i} of ${totalPages}`, margin, pageHeight - 12, { align: "left" });
  }

  // Simpan file
  pdf.save(`skillmatch-report-${history.id}.pdf`);
}
