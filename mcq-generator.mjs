import fs from "fs";
import path from "path";
import MEDICINE_UMM_PAPER_1 from "./src/constants/mcqs/medicine-umm-paper-1.js";
import SURGERY_UMM_GROUP_2 from "./src/constants/mcqs/surgery-umm-group-2.js";
import SURGERY_UMM_GROUP_4 from "./src/constants/mcqs/surgery-umm-group-4.js";

const MEDICINE_MCQs_PATH = path.join(process.cwd(), "src", "pages", "mcqs");

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

createMDXFile("Medicine UMM Paper 1", MEDICINE_UMM_PAPER_1);
createMDXFile("Surgery UMM Group 4", SURGERY_UMM_GROUP_4);
createMDXFile("Surgery UMM Group 2", SURGERY_UMM_GROUP_2);
