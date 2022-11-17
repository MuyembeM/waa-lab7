import Posts from "./Posts";

export default function Dashboard() {

    const posts = [
        { id: 111, title: "Happiness", author: "John" },
        { id: 112, title: "MIU", author: "Dean" },
        { id: 113, title: "Enjoy Life", author: "Jasmine" }
    ]
    
    const titleChanged = (events) => {
        posts[0].title = ""
    }

    return (
        <div>
            <Posts posts= {posts} />
            <div>
                <input type="text"
                    label={'title'}
                    name={'title'}
                    
                />
            </div>
            <div>
                <button onClick={titleChanged}>Change Name </button>
            </div>
            
        </div>
    )

}