const model = (sequelize, DataTypes) => {
     const Account = sequelize.define("account", {
        id : {
            type: DataTypes.STRING,
            allowNull : false,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        email : {
            type: DataTypes.STRING,
            allowNull : false
        },
        verifyEmail : {
            type: DataTypes.BOOLEAN
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_image_path: {
            type: DataTypes.TEXT,
        }
     })

     return Account;
}

export default model;