import { Button } from "~/components/ui/button";

type LoadMoreButtonProps = {
  loading: boolean;
  failed: boolean;
  onClick: () => void;
};

const LoadMoreButton = ({ loading, failed, onClick }: LoadMoreButtonProps) => (
  <div className="mt-10 flex flex-col items-center gap-3">
    <Button
      variant="outline"
      size="lg"
      className="rounded-full"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading…" : "Load more articles"}
    </Button>
    {failed && (
      <p role="alert" className="text-sm text-muted-foreground">
        Couldn't load more articles. Please try again.
      </p>
    )}
  </div>
);

export default LoadMoreButton;
