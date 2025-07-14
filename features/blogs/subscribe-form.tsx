'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubFormSchema } from '@/server/schema';
import { subscribe } from '@/server/subscribe.action';
import type { TSubFormSchema } from '@/server/types';

export default function SubscribeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<TSubFormSchema>({
    resolver: zodResolver(SubFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: TSubFormSchema) => {
    setSubmitting(true);

    const createPromise = subscribe(data);

    toast.promise(createPromise, {
      loading: 'Subscribing...',
    });

    try {
      const result = await createPromise;

      if (result.success) {
        setSubscribed(true); // trigger confirmation message
        form.reset();

        toast.success('Subscribed successfully', {
          description: 'You have been subscribed to News Letters.',
        });
      } else {
        toast.error('Failed to subscribe. Please try again.', {
          description: 'There was an error subscribing to News Letters.',
        });
      }
    } catch {
      toast.error('Failed to subscribe. Please try again.', {
        description: 'There was an error subscribing to News Letters.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (subscribed) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-bold text-muted-foreground text-sm">
          You have been subscribed to News Letters.
        </p>
        <p className="text-muted-foreground text-sm">
          Thank you for subscribing!
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormLabel className="sr-only font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  disabled={submitting}
                  placeholder="youremail@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            className="bg-primary text-primary-foreground"
            disabled={submitting}
            size="sm"
            type="submit"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
