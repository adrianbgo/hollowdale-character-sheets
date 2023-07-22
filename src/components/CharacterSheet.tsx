import React from 'react';

type ICharacterSheet = {
    answers: string[],
    questions: string[],
    fullRitual?: string,
    partialRitual?: string,
    colors?: string
}

const CharacterSheet: React.FC<ICharacterSheet> = ({ answers, questions, fullRitual, partialRitual, colors }) => (
    <div>
        {
            answers.map((answer, index) => (
                <div className='qapair' key={'question-' + index}>
                    <div className='question'>
                        <p>{questions[index]}</p>
                    </div>
                    <div key={index} className='answer'>
                        <p>{answer}</p>
                    </div>
                    <hr />
                </div>
            ))
        }
        {
            fullRitual && partialRitual && (
                <div className='fullritual'>
                    <p><b><em>In order to complete the full or partial ritual, you need the following items. The ritual cannot begin before 3 a.m.</em></b></p>
                    <p>{fullRitual}</p>
                    <br />
                    <p>{partialRitual}</p>
                    <hr />
                </div>
            )
        }
        {
            colors && (
                <div className='colors'>
                    <p><b><em>There will come a time when colors appear in the form of a switch. When it comes time to interact with this switch and you are present at this location, you <u>must</u> try to convince the other players to turn it to the colors below.</em></b></p>
                    <p>{colors}</p>
                </div>
            )
        }
    </div>
)

export default CharacterSheet;