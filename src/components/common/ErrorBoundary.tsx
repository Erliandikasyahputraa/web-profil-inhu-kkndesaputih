import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Container } from '@/components/ui';
import { Display, Body } from '@/components/typography';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Container className="text-center space-y-6">
            <Display>Something went wrong.</Display>
            <Body className="max-w-xl mx-auto">
              We're sorry, but an unexpected error occurred. Please try refreshing the page.
            </Body>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 px-6 py-3 bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
