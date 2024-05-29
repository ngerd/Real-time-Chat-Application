export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body; 
    
        if(password!=confirmPassword) {
            return res.this.status(400).json({error:"Passwords don't match"})
        }

        if(user) {
            return res.this.status(400).json({error:"Username already exists"})
        }

        // HASH PASSWORD HERE
        const boyProfilePic = ``
    } catch (error) {
        
    }
};

export const login = (req, res) => {
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
}; 