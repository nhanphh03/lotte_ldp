db.createUser({
    user: "payload_cms",
    pwd: "Nhan22",
    roles: [
        { role: "readWrite", db: "payload_cms" }
    ]
});
