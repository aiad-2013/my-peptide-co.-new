import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useAdminGuard } from '@/hooks/useAdminGuard';
import { useToast } from '@/hooks/use-toast';

export const Route = createFileRoute('/admin/login')({
  head: () => ({
    meta: [
      { title: 'Admin Sign In' },
      { name: 'description', content: 'Internal admin access' },
    ],
  }),
  component: AdminAuth,
});

const credsSchema = z.object({
  email: z.string().trim().email('Enter a valid email').max(255),
  password: z.string().min(8, 'Min 8 characters').max(72),
});

function AdminAuth() {
  const guard = useAdminGuard();
  const navigate = useNavigate(); // ← from @tanstack/react-router
  const { toast } = useToast();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  // Already admin — redirect to admin dashboard
  if (guard.status === 'admin') {
    navigate({ to: '/admin' });
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = credsSchema.safeParse({ email, password });
    if (!parsed.success) {
      toast({ title: 'Invalid input', description: parsed.error.errors[0].message, variant: 'destructive' });
      return;
    }
    const { email: e2, password: p2 } = parsed.data;
    setBusy(true);
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email: e2, password: p2 });
        if (error) throw error;
        navigate({ to: '/admin' }); // ← TanStack navigate syntax
      } else {
        const { error } = await supabase.auth.signUp({
          email: e2,
          password: p2,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast({ title: 'Account created', description: 'Ask the project owner to grant admin role.' });
      }
    } catch (err) {
      toast({ title: 'Auth error', description: err instanceof Error ? err.message : 'Failed', variant: 'destructive' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-display font-bold">Admin {mode === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
          <p className="text-sm text-muted-foreground">Internal diagnostics access only.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? 'Working…' : mode === 'signin' ? 'Sign in' : 'Create account'}
          </Button>
          <button type="button" onClick={() => setMode(m => m === 'signin' ? 'signup' : 'signin')} className="text-sm text-muted-foreground hover:text-foreground w-full text-center">
            {mode === 'signin' ? 'Need an account? Sign up' : 'Have an account? Sign in'}
          </button>
          {guard.status === 'authenticated-not-admin' && (
            <p className="text-xs text-destructive text-center">
              Signed in as {guard.email} but no admin role granted yet.
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}
