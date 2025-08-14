import fs from "fs";
import path from "path";
import MEDICINE_UMM_PAPER_1 from "./src/constants/mcqs/medicine-umm-paper-1.js";
import SURGERY_UMM_GROUP_1 from "./src/constants/mcqs/surgery-umm-group-1.js";
import SURGERY_UMM_GROUP_2 from "./src/constants/mcqs/surgery-umm-group-2.js";
import SURGERY_UMM_GROUP_3 from "./src/constants/mcqs/surgery-umm-group-3.js";
import SURGERY_UMM_GROUP_4 from "./src/constants/mcqs/surgery-umm-group-4.js";

const MCQs_PATH = path.join(process.cwd(), "src", "pages", "mcqs");

const ABCDE = ["A", "B", "C", "D", "E"];

function createMDXFile(title, data) {
  let text = `# ${title}\n\n\n`;

  data.map((mcq, idx) => {
    text += `**${idx + 1}. ${mcq.statement}**\n\n`;

    mcq.choices.map((choice, index) => {
      text += `<details>\n<summary>${ABCDE[index]}. ${choice.answer}</summary>\n${choice.answerKey ? "`True`" : "~~False~~"} - ${choice.reason}\n</details>\n\n`;
    });

    text += `---\n\n`;
  });

  const filePath = path.join(MCQs_PATH, `${title.replaceAll(" ", "-")}.mdx`);
  fs.writeFileSync(filePath, text, "utf-8");
}

createMDXFile("Medicine UMM Paper 1", MEDICINE_UMM_PAPER_1);
createMDXFile("Surgery UMM Group 1", SURGERY_UMM_GROUP_1);
createMDXFile("Surgery UMM Group 2", SURGERY_UMM_GROUP_2);
createMDXFile("Surgery UMM Group 3", SURGERY_UMM_GROUP_3);
createMDXFile("Surgery UMM Group 4", SURGERY_UMM_GROUP_4);
