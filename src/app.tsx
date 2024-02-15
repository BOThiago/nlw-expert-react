import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const notes = [
    {
        date: new Date(2023, 14, 1),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut qui sunt id voluptatem tenetur ullam accusantium enim pariatur autem vero commodi at rerum. Vero consequuntur accusamus fuga accusantium ipsa.",
    },
    {
        date: new Date(2023, 15, 1),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut qui sunt id voluptatem tenetur ullam accusantium enim pariatur autem vero commodi at rerum. Vero consequuntur accusamus fuga accusantium ipsa.",
    },
    {
        date: new Date(2023, 16, 1),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut qui sunt id voluptatem tenetur ullam accusantium enim pariatur autem vero commodi at rerum. Vero consequuntur accusamus fuga accusantium ipsa.",
    },
    {
        date: new Date(2023, 17, 1),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut qui sunt id voluptatem tenetur ullam accusantium enim pariatur autem vero commodi at rerum. Vero consequuntur accusamus fuga accusantium ipsa.",
    },
];

export function App() {
    return (
        <div className="mx-auto max-w-6xl my-12  space-y-6">
            <img src={logo} alt="NLW Expert" />

            <form className="w-full">
                <input
                    type="text"
                    placeholder="Busque em suas notas..."
                    className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
                />
            </form>

            <div className="h-px bg-slate-700" />

            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
                <NewNoteCard />
                {notes.map((note) => {
                    return <NoteCard note={note} />;
                })}
            </div>
        </div>
    );
}
