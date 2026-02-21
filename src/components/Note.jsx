// class in CSS will take directly from parents and apply the child css

function Note() {
    return ( 
    <div className="note" contentEditable="true">
        <h1>Title</h1>
        <p>Content</p>
    </div>
    );
}

export default Note;