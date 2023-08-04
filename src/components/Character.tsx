// bLINkTHROURE
import axios from "axios";
import React, { useState } from "react";
import CharacterSheet from "./CharacterSheet";
import "../scss/Character.scss";
import { useParams } from "react-router-dom";
import "../scss/Modal.scss";

type IQuestions = {
  [name: string]: {
    questions: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ];
    fullRitual?: string;
    partialRitual?: string;
    colors?: string;
    name: string;
  };
};
const formUrl =
  "https://script.google.com/macros/s/AKfycbxZACAbJRoviHBrWxBnlwpG3H00z_wMxlnX1DWvNYOOAv8A4tsiqZKR0XrVFWASIY99/exec";

const Character: React.FC = () => {
  const routeParams = useParams();
  const [answers, setAnswers] = useState<Array<string>>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = React.useState<string>(routeParams.id || "");
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [complete, setComplete] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const questions: IQuestions = {
    AFTYpelIQUeT: {
      questions: [
        // Anderson
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, Ralph Anderson?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "What is the only memento you have kept from your childhood?",
        "What did your last few breakups have in common?",
        "When the world seems against you, what is the one thing that keeps you moving forward?",
        "Despite being allergic to it, what food can you not stay away from?",
        "What religion do you devote yourself to out of fear?",
        "When you were younger, you spent a lot of your time playing with your older sister. So, why did you let her die?",
        "Name your top three weaknesses.",
        "What three items are you bringing?",
      ],
      name: "Anderson",
    },
    bLINkTHROURE: {
      questions: [
        // Blakely
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandmother, Marin Blakely?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "When you were laid off, what skills did you utilize to make ends meet?",
        "Because of what medical condition were you unable to participate in sports as a child?",
        "What happened when you were younger that made you hate being alone?",
        "Who among the other characters makes you nervous and why?",
        "Who forgave you before they died and what did they forgive you of?",
        "Name your top three weaknesses.",
        "What two items and one secret item are you bringing?",
        "Why have you chosen to betray your friends?",
      ],
      fullRitual:
        "All three magic switches must be set to primary colors (Red, Blue, and Yellow), obtain the King's Claw item, and bring the body (dead or alive) of King to the Cracked Seal. Once done, the Game Master will give you the rest of the information needed.",
      partialRitual:
        "At least one magic switch must be set to a primary color, obtain the King's Claw item, obtain either the Glass Eye, Onyx Ring, or Demented Diary items (only one is needed!), and bring the body part belonging to any other player but yourself. Once done, the Game Master will give you the rest of the information needed.",
      name: "Blakely",
      colors: "All primary colors (Red, Blue, Yellow)",
    },
    ngeRNARboLUt: {
      questions: [
        // Connors
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, Henry Connors?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "How has your attention to detail saved your life?",
        "How might your life be different if you hadn't driven off in a rage that night?",
        "What addiction do you hide from your friends?",
        "When all else is quiet, how do you silence the screaming in your head?",
        "Why haven't you scattered your brother's ashes yet?",
        "Name your top three weaknesses.",
        "What two items and one secret item are you bringing?",
        "Why have you chosen to betray your friends?",
      ],
      name: "Connors",
      fullRitual:
        "Obtain the Ashen Dogwood Stake item, and bring the body (dead or alive) of an Anderson to the cracked seal. Once done, the Game Master will give you the rest of the information needed.",
      partialRitual:
        "Obtain the Ashen Dogwood Stake item, obtain either the Cracked Skull Bowl, Onyx Ring, or Demented Diary items (only one is needed!), and bring a severed limb belonging to any other player but yourself. You will need a way to light something on fire. Once done, the Game Master will give you the rest of the information needed.",
      colors: "Red calls out to you, though you want to stay away from Orange",
    },
    GATeAsHPINTi: {
      questions: [
        // King
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, Kenneth King?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "Why are you the first one people turn to in a crisis?",
        "What tool of your trade are you never without?",
        "You've battled your alcoholism fairly successfully over the years; why did you have a drink last week?",
        "Why haven't you spoken to your mother in the past 5 years, despite the fact that she leaves you a message nearly every night?",
        "What song always makes you think of your worst childhood memory and why?",
        "What happened 10 years ago that still haunts you to this day?",
        "Name your top three weaknesses.",
        "What four items are you bringing?",
      ],
      name: "King",
      colors:
        "Yellow calls out to you, though you want to stay away from purple",
    },
    TuOrAnsErOIN: {
      questions: [
        // McCloud
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, George McCloud?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "When was the last time you cried?",
        "What feat have you never been able to reproduce?",
        "How do your companions find you indispensable, and how are they wrong?",
        "What is one bad habit you can't seem to break?",
        "If the headaches are getting so bad, why don't you see a doctor?",
        "Why were you pushing your uncle to sign a Do Not Resuscitate order?",
        "Name your top three weaknesses.",
        "What three items are you bringing?",
      ],
      name: "McCloud",
      colors: "Blue calls out to you, though you want to stay away from Green",
    },
    IGUIrMIsEZen: {
      questions: [
        // Winters
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, Alice Winters?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "What was the last fad you embraced and why?",
        "Which character are you most excited to see again?",
        "In what odd way do you react with rising tensions?",
        "Despite being a pacifist, what situation always leads you to violence?",
        "What injury of yours never quite healed right?",
        "What did you do to make your parents resent you?",
        "Name your top three weaknesses.",
        "What two items are you bringing?",
      ],
      name: "Winters",
    },
    eRAnActIsMeR: {
      questions: [
        // Anderson
        "What is your name?",
        "What is your occupation?",
        "What is your family life like?",
        "Why did you feel particularly close to your grandfather, Ralph Anderson?",
        "What is your proudest moment?",
        "What unique skill or talent do you possess?",
        "What is an irrational fear you have?",
        "What is your darkest secret?",
        "What is the only memento you have kept from your childhood?",
        "What did your last few breakups have in common?",
        "When the world seems against you, what is the one thing that keeps you moving forward?",
        "Despite being allergic to it, what food can you not stay away from?",
        "What religion do you devote yourself to out of fear?",
        "When you were younger, you spent a lot of your time playing with your older sister. So, why did you let her die?",
        "Name your top three weaknesses.",
        "What three items are you bringing?",
      ],
      name: "Anderson",
    },
  };
  const SubmitButton = () => {
    return (
      <button onClick={() => setIsOpen(!isOpen)} disabled={!complete}>
        Submit
      </button>
    );
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = [...answers];
    newArr[parseInt(e.target.name)] = e.target.value;
    setAnswers(newArr);
    setComplete(answers.every((answer) => answer !== ""));
    console.log(answers);
    console.log(complete);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `${formUrl}?charname=${encodeURIComponent(
        questions[password].name
      )}&name=${encodeURIComponent(name)}&q1=${encodeURIComponent(
        questions[password].questions[0]
      )}&a1=${encodeURIComponent(answers[0]!)}&q2=${encodeURIComponent(
        questions[password].questions[1]
      )}&a2=${encodeURIComponent(answers[1]!)}&q3=${encodeURIComponent(
        questions[password].questions[2]
      )}&a3=${encodeURIComponent(answers[2]!)}&q4=${encodeURIComponent(
        questions[password].questions[3]
      )}&a4=${encodeURIComponent(answers[3]!)}&q5=${encodeURIComponent(
        questions[password].questions[4]
      )}&a5=${encodeURIComponent(answers[4]!)}&q6=${encodeURIComponent(
        questions[password].questions[5]
      )}&a6=${encodeURIComponent(answers[5]!)}&q7=${encodeURIComponent(
        questions[password].questions[6]
      )}&a7=${encodeURIComponent(answers[6]!)}&q8=${encodeURIComponent(
        questions[password].questions[7]
      )}&a8=${encodeURIComponent(answers[7]!)}&q9=${encodeURIComponent(
        questions[password].questions[8]
      )}&a9=${encodeURIComponent(answers[8]!)}&q10=${encodeURIComponent(
        questions[password].questions[9]
      )}&a10=${encodeURIComponent(answers[9]!)}&q11=${encodeURIComponent(
        questions[password].questions[10]
      )}&a11=${encodeURIComponent(answers[10]!)}&q12=${encodeURIComponent(
        questions[password].questions[11]
      )}&a12=${encodeURIComponent(answers[11]!)}&q13=${encodeURIComponent(
        questions[password].questions[12]
      )}&a13=${encodeURIComponent(answers[12]!)}&q14=${encodeURIComponent(
        questions[password].questions[13]
      )}&a14=${encodeURIComponent(answers[13]!)}&q15=${encodeURIComponent(
        questions[password].questions[14]
      )}&a15=${encodeURIComponent(answers[14]!)}&q16=${encodeURIComponent(
        questions[password].questions[15]
      )}&a16=${encodeURIComponent(answers[15]!)}`,
    });

    localStorage.setItem("charname", questions[password].name);
    localStorage.setItem("name", name);
    localStorage.setItem("q1", questions[password].questions[0]);
    localStorage.setItem("a1", answers[0]!);
    localStorage.setItem("q2", questions[password].questions[1]);
    localStorage.setItem("a2", answers[1]!);
    localStorage.setItem("q3", questions[password].questions[2]);
    localStorage.setItem("a3", answers[2]!);
    localStorage.setItem("q4", questions[password].questions[3]);
    localStorage.setItem("a4", answers[3]!);
    localStorage.setItem("q5", questions[password].questions[4]);
    localStorage.setItem("a5", answers[4]!);
    localStorage.setItem("q6", questions[password].questions[5]);
    localStorage.setItem("a6", answers[5]!);
    localStorage.setItem("q7", questions[password].questions[6]);
    localStorage.setItem("a7", answers[6]!);
    localStorage.setItem("q8", questions[password].questions[7]);
    localStorage.setItem("a8", answers[7]!);
    localStorage.setItem("q9", questions[password].questions[8]);
    localStorage.setItem("a9", answers[8]!);
    localStorage.setItem("q10", questions[password].questions[9]);
    localStorage.setItem("a10", answers[9]!);
    localStorage.setItem("q11", questions[password].questions[10]);
    localStorage.setItem("a11", answers[10]!);
    localStorage.setItem("q12", questions[password].questions[11]);
    localStorage.setItem("a12", answers[11]!);
    localStorage.setItem("q13", questions[password].questions[12]);
    localStorage.setItem("a13", answers[12]!);
    localStorage.setItem("q14", questions[password].questions[13]);
    localStorage.setItem("a14", answers[13]!);
    localStorage.setItem("q15", questions[password].questions[14]);
    localStorage.setItem("a15", answers[14]!);
    localStorage.setItem("q16", questions[password].questions[15]);
    localStorage.setItem("a16", answers[15]!);
    if (questions[password].fullRitual) {
      localStorage.setItem("fullRitual", questions[password].fullRitual!);
    }
    if (questions[password].partialRitual) {
      localStorage.setItem("partialRitual", questions[password].partialRitual!);
    }
    if (questions[password].colors) {
      localStorage.setItem("colors", questions[password].colors!);
    }

    setSubmitted(true);
  };
  return (
    <>
      {submitted || localStorage.getItem("q1") ? (
        <CharacterSheet
          questions={[
            localStorage.getItem("q1")!,
            localStorage.getItem("q2")!,
            localStorage.getItem("q3")!,
            localStorage.getItem("q4")!,
            localStorage.getItem("q5")!,
            localStorage.getItem("q6")!,
            localStorage.getItem("q7")!,
            localStorage.getItem("q8")!,
            localStorage.getItem("q9")!,
            localStorage.getItem("q10")!,
            localStorage.getItem("q11")!,
            localStorage.getItem("q12")!,
            localStorage.getItem("q13")!,
            localStorage.getItem("q14")!,
            localStorage.getItem("q15")!,
            localStorage.getItem("q16")!,
          ]}
          answers={[
            localStorage.getItem("a1")!,
            localStorage.getItem("a2")!,
            localStorage.getItem("a3")!,
            localStorage.getItem("a4")!,
            localStorage.getItem("a5")!,
            localStorage.getItem("a6")!,
            localStorage.getItem("a7")!,
            localStorage.getItem("a8")!,
            localStorage.getItem("a9")!,
            localStorage.getItem("a10")!,
            localStorage.getItem("a11")!,
            localStorage.getItem("a12")!,
            localStorage.getItem("a13")!,
            localStorage.getItem("a14")!,
            localStorage.getItem("a15")!,
            localStorage.getItem("a16")!,
          ]}
          fullRitual={localStorage.getItem("fullRitual") || undefined}
          partialRitual={localStorage.getItem("partialRitual") || undefined}
          colors={localStorage.getItem("colors") || undefined}
        />
      ) : (
        <form onSubmit={onSubmit} className="character-form">
          <div className="row">
            <label>Player Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password !== "" ? password : ""}
            />
          </div>
          {questions[password] !== undefined &&
            questions[password].questions.map((question, index) => {
              return (
                <div className="row" key={index}>
                  <label>
                    {question}{" "}
                    {index == 0 && `( _______ ${questions[password].name})`}
                  </label>
                  <input
                    type="text"
                    name={`${index}`}
                    onChange={onChange}
                    key={index.toString() + "-i"}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                  />
                </div>
              );
            })}
          <SubmitButton />
        </form>
      )}
    </>
  );
};

export default Character;
