import { useEffect, useState } from "react"

// 1.useEffect(CallBack)
// -CallBack luôn được gọi sau khi component re-render
// -gọi callBack sau khi component thêm element vào Dom

// 2.useEffect(CallBack,[])
// - chỉ gọi callBack 1 lần khi component mounted
// 3.useEffect(CallBack,[deps])
// -callBack sẽ được gọi lại mỗi khi deps thay đổi
// -------------------------------------------------------------------------------------------------------
// 1. CallBack luôn được gọi sua khi component mounted

const tag = ['posts', 'Comments', 'albums']
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [backToTop, setBackToTop] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        // document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }, [])


    return (
        <div>
            {tag.map((tab) => {
                return (
                    <button
                        style={type === tab ? { color: '#fff', background: '#333' } : {}}
                        key={tab}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                )
            })}
            <input
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <ul>
                {posts.map((post) => {
                    return <li key={post.id} >{post.title || post.name}</li>
                })}
            </ul>
            {backToTop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px'
                    }}
                    onClick={scrollTop}

                >
                    scroll back top

                </button>
            )}

        </div>
    )
}

export default Content