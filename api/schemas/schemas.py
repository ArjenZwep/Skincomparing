from app import ma

#Schema
class SkinsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'SkinName', 'SkinImg', 'RarityTier', 'ReleaseDate', 'RankingScore', 'AmountOfWins', 'AmountOfLosses')