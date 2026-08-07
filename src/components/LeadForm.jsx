import React, { useState } from 'react';
import { Loader2, Check, AlertTriangle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const initial = { name: '', email: '', ca_city: '', move_date: '', message: '' };

const fieldClass =
    'w-full rounded-sm border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors';

const LeadForm = () => {
    const [form, setForm] = useState(initial);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            await pb.collection('relocation_leads').create(form);
            setStatus('done');
            setForm(initial);
        } catch (err) {
            setStatus('error');
            setError(err?.message || 'Something went wrong. Please call or text us instead.');
        }
    };

    if (status === 'done') {
        return (
            <div className="rounded-sm border border-primary/30 bg-primary/5 p-8 text-center">
                <Check className="mx-auto h-10 w-10 text-primary" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-2xl font-semibold uppercase text-primary">Guide on the way</h3>
                <p className="mt-2 text-muted-foreground">
                    Thanks — we received your details. Mark or Lauren will email your SoCal-to-Northern-Utah relocation
                    guide within one business day.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary underline underline-offset-4"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="lead-name" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Full name
                    </label>
                    <input id="lead-name" required value={form.name} onChange={update('name')} placeholder="Jordan Reyes" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lead-email" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Email
                    </label>
                    <input id="lead-email" type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lead-city" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Current California city
                    </label>
                    <input id="lead-city" required value={form.ca_city} onChange={update('ca_city')} placeholder="Temecula, CA" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lead-date" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Target Utah move date
                    </label>
                    <input id="lead-date" type="month" required value={form.move_date} onChange={update('move_date')} className={fieldClass} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="lead-message" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What matters most in your next property? (optional)
                </label>
                <textarea
                    id="lead-message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="RV garage, trail access, acreage, school district..."
                    className={fieldClass}
                />
            </div>

            {status === 'error' && (
                <p className="flex items-start gap-2 text-sm text-destructive">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-accent-foreground transition-transform duration-200 ease-out hover:brightness-95 active:scale-[0.98] disabled:opacity-70 sm:w-auto"
            >
                {status === 'loading' && <Loader2 className="h-5 w-5 animate-spin" />}
                {status === 'loading' ? 'Sending' : 'Get Your Relocation Guide'}
            </button>
            <p className="text-xs text-muted-foreground">
                We use your details only to prepare your relocation plan. No spam, no list sharing.
            </p>
        </form>
    );
};

export default LeadForm;
