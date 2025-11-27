# User folder

### _DELETE THIS FILE_

In this folder you can setup your routes like auth, posts, users etc.

Example:

- Post
- Get
- Patch
- Put
- Delete

router.get("/:id", validateUserId, async (req, res) => {
try {
const userId = Number(req.params.id);

    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
    const users = rows as User[];
    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(users[0]);

} catch (error) {
console.error("Error fetching user:", error);
res.status(500).json({ message: "Internal server error" });
}
});
