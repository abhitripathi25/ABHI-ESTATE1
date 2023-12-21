// user.controller.js
// whatever the msg and json will be transmitted from here

// ye msg hume server yani ye sab jo create kiya h whi sel 
// mil rha h
export const test = (req, res) => {
    res.json({
        message: 'hello world',
    });
};


