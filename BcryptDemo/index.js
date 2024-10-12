const bcrypt=require('bcrypt');
// const hashPassword=async(pw)=>{
//     const salt=await bcrypt.genSalt(12);// we generated salt
//     const hash=await bcrypt.hash(pw,salt); //generate hash function by using salt and key('monkey')
//     console.log(salt);
//     console.log(hash);
// }
// generate salt direct method and above one separately generate
const hashPassword=async(pw)=>{
    const hash=await bcrypt.hash(pw,12); //generate hash function by using salt and key('monkey')
    console.log(salt);
    console.log(hash);
}
const login=async (pw,hashpw)=>{
const result=await bcrypt.compare(pw,hashpw);
if(result)
{
    console.log('login Successfull');
    
}
else
console.log('Failed login');

}
// hashPassword('monkey');
login('monkey','$2b$12$Kb7CPFu6i71ezsUoMP44we4MHieX91nHYlyo6mPk6vo3ThjODe4Aa');