import fs from "fs";
import path from "path";
import MEDICINE_UMM_PAPER_1_MCQs from "./src/constants/mcqs/medicine-umm-paper1.js";

const MEDICINE_MCQs_PATH = path.join(
  process.cwd(),
  "src",
  "pages",
  "medicine",
  "theory",
  "mcqs",
);

function createMDXFile(title, data) {
  let text = `# ${title}\n\n\n`;

  data.map((mcq, idx) => {
    text += `**${idx + 1}. ${mcq.statement}**\n\n`;

    mcq.choices.map((choice, index) => {
      text += `<details>\n<summary>${index + 1}. ${choice.answer}</summary>\n${choice.answerKey ? "`True`" : "~~False~~"} - ${choice.reason}\n</details>\n\n`;
    });

    text += `---\n\n`;
  });

  const filePath = path.join(
    MEDICINE_MCQs_PATH,
    `${title.replaceAll(" ", "-")}.mdx`,
  );
  fs.writeFileSync(filePath, text, "utf-8");
}

createMDXFile("UMM Paper 1", MEDICINE_UMM_PAPER_1_MCQs);
