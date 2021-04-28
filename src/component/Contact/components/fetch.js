import * as React from "react";

 const CreateBlogPost = (data) => {
    const chatId = `chat_id=${324368439}`;
    const url = `https://api.telegram.org/bot1745195736:AAGXs_Il_KNj7qzprDAKQsdHRVLTVl-DExI/sendMessage?${chatId}`;

     const [error, setError] = React.useState(null);
     const [isLoaded, setIsLoaded] = React.useState(false);
     const [items, setItems] = React.useState([]);

     React.useEffect(() => {
         fetch(url)
             .then(res => res.json())
             .then(
                 (result) => {
                     setIsLoaded(true);
                     setItems(result);
                 },
                 (error) => {
                     setIsLoaded(true);
                     setError(error);
                 }
             )
     }, [])
};

export default CreateBlogPost;
