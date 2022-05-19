import { atom } from "recoil";

const firstNameatom = atom({
    key:"firstName",
    default:null
}) ;
const lastNameatom = atom({
    key:"lastName",
    default:null
}) ; const passwordatom = atom({
    key:"pass",
    default:null
}) ; const confirmatom = atom({
    key:"cpass",
    default:null
}) ; const emailatom = atom({
    key:"mail",
    default:null
}) ;

export {firstNameatom , lastNameatom , passwordatom , confirmatom ,emailatom};
