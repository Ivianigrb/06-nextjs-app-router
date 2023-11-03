/* template ini hampir sama seperti layout dia bisa tersedia outputnya di semua halaman/routing tapi bedanya dengan layout, 
template ini akan menglakukan new instance(instansiasi ulang atau template ini akan mereset kembali ketika merubah halaman routingnya). 
tapi dia tidak akan melakukan new instance jika halaman routing tersebut ada di dalam sebuah halaman routing lagi atau ada di dalam satu halaman routing yang sama*/

"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    return (
    <div>
        {/* <h1>Contoh Tamplate {state}</h1>
        <button onClick={() => setState(state + 1)}>Klik</button> */}
        {children}
    </div>
    );
  };