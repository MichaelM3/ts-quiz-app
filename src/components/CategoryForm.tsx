import { useState } from "react"
import { IOption } from "../interfaces/index"
import { ICategoryFormProps } from "../interfaces/props"

const options: IOption[] = [
    { name: "Arts & Literature", value: "arts_and_literature" },
    { name: "Film & TV", value: "film_and_tv" },
    { name: "Food & Drink", value: "food_and_drink" },
    { name: "General Knowledge", value: "general_knowledge" },
    { name: "Geography", value: "geography" },
    { name: "History", value: "history" },
    { name: "Music", value: "music" },
    { name: "Science", value: "science" },
    { name: "Society & Culture", value: "society_and_culture" },
    { name: "Sports & Leisure", value: "sports_and_leisure" },
]

const CategoryForm = ({ fetchQuizData }: ICategoryFormProps) => {
    const [category, setCategory] = useState<string>("general_knowledge")

    return (
        <div className='flex m-4'>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {options.map((option: IOption, i: number) => (
                    <option key={i} value={option.value}>{option.name}</option>
                ))}
            </select>
            <button onClick={() => fetchQuizData(category)} className="bg-white text-slate-500 p-2 rounded-r-lg">
                Submit
            </button>
        </div>
    )
}

export default CategoryForm
