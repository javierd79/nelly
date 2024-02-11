import { Text, SimpleGrid, Container, rem, createStyles } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
  overlay: {
    position: "absolute",
    height: rem("100px"),
    width: rem("160px"),
    top: 0,
    left: 0,
    backgroundColor: "rgba(34,139,230,.15)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  icon: {
    color: theme.colors.blue[5],
  },
  title: {
    color: (theme.colors.light, theme.colors.white),
  }
}))

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes } = useStyles()
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const allItems = [
  {
    icon: IconTruck,
    title: 'Free Worldwide shipping',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconCertificate,
    title: 'Best Quality Product',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconCoin,
    title: 'Very Affordable Pricing',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];

export function FeaturesAsymmetrical() {
  const items = allItems.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'sm', cols: 1 }
        ]}
        spacing={50}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}