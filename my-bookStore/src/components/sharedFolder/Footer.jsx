import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <>
            <div className="h-[280px] p-[20px]">
            <div className="flex gap-[150px] justify-center w-[80%] m-[auto] h-[200px] ">
                <div>
                    <h1 className="font-bold text-lg">QUICK LINKS</h1>
                    <div>
                    <ul className=" flex flex-col gap-[5px]">
                            <a href="/Home"><li>home</li></a>
                            <a href="/About"><li>about</li></a>
                            <a href="/Shop"><li>shop</li></a>
                            <a href="/Contact"><li>contact</li></a>
                            <a href="#"><li>orders</li></a>
                            </ul>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-lg">EXTRA LINKS</h1>
                    <div>
                        <ul className=" flex flex-col gap-[5px]">
                            <li><Link to='/'>login</Link></li>
                            <li><Link to='/register'>register</Link></li>
                            <a href=""><li>cart</li></a>
                            <a href=""><li>order</li></a>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-lg">CONTACT INFO</h1>
                    <div>
                        <div className="flex gap-[4px] pb-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                        <span>080-000-0000</span>
                        </div>
                        <div className="flex gap-[4px] pb-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                        <span>090-000-0000</span>
                        </div>
                        <div className="flex gap-[4px] pb-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                        <span>johndoe@gmail.com</span>
                        </div>
                        <div className="flex gap-[4px]">
                            <a href="https://maps.app.goo.gl/VnZ7YrgQQnz7KMqh7" target="_blank" className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                        <span>gomycode-100011</span>
                        </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-lg">FOLLOW US</h1>
                    <div className="pb-[10px]">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" className="flex gap-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    <span>facebook</span>
                    </a>
                    </div>

                    <div className="pb-[10px]">
                        <a href="https://x.com/i/flow/login?lang=en" target="_blank" className="flex gap-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    <span>twitter</span>
                    </a>
                    </div>

                    <div className="pb-[10px]">
                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" className="flex gap-[4px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span>instagram</span>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/login" target="_blank" className="flex gap-[4px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span>linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border border-black w-[80%] m-[auto]"/>
            <div className="m-[auto] w-[80%] text-center mt-[10px]">
            &copy; copyright@2024 by <span className="text-purple-500"> mr.rielCodes</span>
            </div>
        </div>
        </>
    )
}