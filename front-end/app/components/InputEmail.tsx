export default function InputEmail() {
    return(
        <div className="input-label">
            <label htmlFor="email">E-mail</label>

            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                required
            />
        </div>
    )
    
}