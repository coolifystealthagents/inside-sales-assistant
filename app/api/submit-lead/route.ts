import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../../lib/lead-fallback-mattermost';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);

export async function POST(request: Request) {
  const form = await request.formData();
  if (form.get('website_url')) return NextResponse.json({ ok: true, ignored: true });
  const firstName = String(form.get('first_name') || '').trim();
  const lastName = String(form.get('last_name') || '').trim();

  const email = String(form.get('email') || '').trim().toLowerCase();
  const company = String(form.get('company') || '').trim();
  const companySize = String(form.get('company_size') || '').trim();
  const positions = String(form.get('positions_to_fill') || '').trim();
  const referral = String(form.get('referral_source') || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email) || !firstName || !lastName || !company || !companySize || !positions || !referral) {
    return NextResponse.json({ ok: false, message: 'Please complete every required field.' }, { status: 400 });
  }
  if (personalDomains.has(email.split('@')[1])) {
    return NextResponse.json({ ok: false, message: 'Please use your business email address.' }, { status: 400 });
  }
  void sendLeadFallbackToMattermost({
    name: [firstName, lastName].join(' '),
    email,
    phone: String(form.get('phone') || ''),
    business: company,
    message: String(form.get('message') || ''),
    companySize,
    positions,
    referral,
    pageUrl: String(form.get('_page_url') || request.headers.get('referer') || ''),
    userAgent: request.headers.get('user-agent') || '',
  });
  return NextResponse.json({ ok: true });
}
