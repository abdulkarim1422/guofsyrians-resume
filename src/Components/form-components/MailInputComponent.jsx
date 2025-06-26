import { Mail } from 'lucide-react';

export function MailInputComponent(formData, setFormData) {
    return <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email (Gmail only) *
        </label>
        <div className="relative flex">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email.replace(/@gmail\.com$/, '')}
                onChange={e => {
                    // Prevent '@' character and force gmail.com
                    let value = e.target.value.replace(/@/g, '');
                    setFormData(prev => ({
                        ...prev,
                        email: value + '@gmail.com'
                    }));
                } }
                onKeyDown={e => {
                    if (e.key === '@') {
                        e.preventDefault();
                    }
                } }
                required
                className="w-full pl-10 pr-28 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="yourname"
                autoComplete="off" />
            <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm select-none">
                @gmail.com
            </span>
        </div>
    </div>;
}
